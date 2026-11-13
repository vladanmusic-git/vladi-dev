// Visit counting for vladii.com (PostHog Cloud US), privacy first.
//
// What it does, and what the /privacy page promises (keep the two in step):
// - Nothing loads when the browser sends Global Privacy Control or Do Not Track.
// - Visitors whose device clock is set to a European time zone are asked first
//   (legal read: inbox/2026-11-12-vladii-analytics-consent-legal-read.md).
// - Nothing is kept on the device: no cookies, no localStorage, no sessionStorage.
//   PostHog runs in memory only, so every page load starts a fresh, random id.
// - No person profiles, no session recording, no autocapture, no remote config.
// - The project discards the IP address after the country and region lookup.
//
// Events: $pageview (with UTM tags, plus the landing link's src and t),
// upwork_click (where), scroll_depth (25/50/75/100), section_view (#work,
// #capabilities, #about, #contact at half visible), and PostHog's $pageleave.

import type { PostHog } from "posthog-js";

// The project's public write-only token. Safe in client code by design.
const POSTHOG_TOKEN = "phc_qNbnBqA79F3pnXjD9uNQwG9oMvXLJnumifoK2GfDmzZ9";
const API_HOST = "https://us.i.posthog.com";

const SECTION_IDS = ["work", "capabilities", "about", "contact"] as const;
const DEPTHS = [25, 50, 75, 100] as const;

export type AnalyticsStatus =
  | "idle" // not decided yet (server render, first paint)
  | "signal" // GPC or Do Not Track: never loaded
  | "asking" // European time zone: waiting for an answer
  | "on" // counting this visit
  | "off"; // declined, or stopped from the privacy page

let status: AnalyticsStatus = "idle";
const listeners = new Set<() => void>();

function setStatus(next: AnalyticsStatus) {
  status = next;
  listeners.forEach((fn) => fn());
}

export function getStatus(): AnalyticsStatus {
  return status;
}

export function getServerStatus(): AnalyticsStatus {
  return "idle";
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Global Privacy Control or Do Not Track is on: the script must never load. */
export function privacySignalOn(): boolean {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
  if (nav.globalPrivacyControl === true) return true;
  const win = window as Window & { doNotTrack?: string };
  const dnt = nav.doNotTrack ?? win.doNotTrack ?? nav.msDoNotTrack;
  return dnt === "1" || dnt === "yes";
}

// EU, EEA, UK and Swiss time zones, the EU's outlying regions, and any zone
// that does not say where the device is. Over-inclusive on purpose: when in
// doubt the visitor is asked. The zone is read on the device and never sent.
const ASK_FIRST_ZONES =
  /^(Europe\/|Atlantic\/(Azores|Madeira|Canary|Reykjavik|Faroe|Faeroe)$|Arctic\/Longyearbyen$|Asia\/(Nicosia|Famagusta)$|Indian\/(Reunion|Mayotte)$|America\/(Guadeloupe|Martinique|Cayenne|St_Barthelemy|Marigot)$|Etc\/|(UTC|UCT|GMT|Universal|Zulu|GB|GB-Eire|Eire|Iceland|Poland|Portugal|CET|EET|WET|MET)$)/;

export function shouldAskFirst(): boolean {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return !zone || ASK_FIRST_ZONES.test(zone);
  } catch {
    return true;
  }
}

let ph: PostHog | null = null;
let loading = false;
let stopped = false;
let currentPath = "";
let landing: Record<string, string> = {};
const seenDepths = new Set<number>();
const seenSections = new Set<string>();
const observed = new Set<string>();
let observer: IntersectionObserver | null = null;
let scrollFrame = 0;

function readLanding(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of ["src", "t"]) {
    const value = params.get(key);
    if (value) out[key] = value.slice(0, 100);
  }
  return out;
}

function capture(event: string, props: Record<string, unknown> = {}, beacon = false) {
  if (!ph || stopped) return;
  ph.capture(event, props, beacon ? { transport: "sendBeacon" } : undefined);
}

function checkDepth() {
  scrollFrame = 0;
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  const pct = scrollable <= 0 ? 100 : ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
  for (const depth of DEPTHS) {
    // 100 counts at the last 2 percent, so a page that ends in padding still reaches it.
    const reached = depth === 100 ? pct >= 98 : pct >= depth;
    if (reached && !seenDepths.has(depth)) {
      seenDepths.add(depth);
      capture("scroll_depth", { depth });
    }
  }
  if (observed.size < SECTION_IDS.length) observeSections();
}

function onScroll() {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(checkDepth);
}

function onIntersect(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    const id = entry.target.id;
    if (!entry.isIntersecting || seenSections.has(id)) continue;
    // "Half visible": half of the section, or half of the screen for a section taller than the screen.
    const needed = 0.5 * Math.min(entry.boundingClientRect.height, window.innerHeight);
    if (entry.intersectionRect.height >= needed) {
      seenSections.add(id);
      capture("section_view", { section: id });
    }
  }
}

function observeSections() {
  if (!observer) {
    observer = new IntersectionObserver(onIntersect, {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    });
  }
  for (const id of SECTION_IDS) {
    if (observed.has(id)) continue;
    const el = document.getElementById(id);
    if (el) {
      observer.observe(el);
      observed.add(id);
    }
  }
}

function onClick(event: MouseEvent) {
  if (event.type === "auxclick" && event.button !== 1) return;
  const target = event.target instanceof Element ? event.target : null;
  const link = target?.closest<HTMLElement>("[data-upwork-click]");
  if (!link) return;
  capture("upwork_click", { where: link.dataset.upworkClick ?? "unknown", ...landing }, true);
}

/** A new page (first load or a client-side route change): count it and reset the per-page events. */
export function trackPage(pathname: string) {
  if (!ph || stopped || pathname === currentPath) return;
  currentPath = pathname;
  seenDepths.clear();
  seenSections.clear();
  observed.clear();
  observer?.disconnect();
  capture("$pageview");
  window.requestAnimationFrame(() => {
    observeSections();
    checkDepth();
  });
}

/** Load PostHog and start counting this visit. Safe to call more than once. */
export async function startAnalytics(pathname: string) {
  if (privacySignalOn()) {
    setStatus("signal");
    return;
  }
  stopped = false;
  setStatus("on");
  if (ph) {
    // Counting resumed after a stop: this page is counted again.
    currentPath = "";
    trackPage(pathname);
    return;
  }
  if (loading) return;
  loading = true;
  try {
    const { default: posthog } = await import("posthog-js");
    landing = readLanding();
    posthog.init(POSTHOG_TOKEN, {
      api_host: API_HOST,
      ui_host: "https://us.posthog.com",
      persistence: "memory",
      disable_persistence: true,
      person_profiles: "never",
      autocapture: false,
      capture_pageview: false,
      capture_pageleave: true,
      rageclick: false,
      capture_dead_clicks: false,
      capture_heatmaps: false,
      capture_exceptions: false,
      capture_performance: false,
      disable_session_recording: true,
      disable_surveys: true,
      disable_product_tours: true,
      disable_conversations: true,
      disable_web_experiments: true,
      disable_external_dependency_loading: true,
      advanced_disable_flags: true,
      before_send: (event) => (stopped ? null : event),
    });
    posthog.register({
      env: window.location.hostname === "vladii.com" ? "production" : "staging",
      ...landing,
    });
    ph = posthog;
    document.addEventListener("click", onClick, true);
    document.addEventListener("auxclick", onClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (stopped) return;
    trackPage(pathname);
  } catch {
    // Analytics must never break the page. A failed load just counts nothing.
    setStatus("off");
  } finally {
    loading = false;
  }
}

/** The visitor said no, or stopped counting from the privacy page. Nothing more is sent. */
export function stopAnalytics() {
  stopped = true;
  observer?.disconnect();
  setStatus("off");
}

/** The European visitor has not answered yet: show the question. */
export function askFirst() {
  setStatus("asking");
}

export function blockedBySignal() {
  setStatus("signal");
}
