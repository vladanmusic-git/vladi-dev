"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import {
  askFirst,
  blockedBySignal,
  getServerStatus,
  getStatus,
  privacySignalOn,
  shouldAskFirst,
  startAnalytics,
  stopAnalytics,
  subscribe,
  trackPage,
} from "@/lib/analytics";

export function useAnalyticsStatus() {
  return useSyncExternalStore(subscribe, getStatus, getServerStatus);
}

const BUTTON =
  "flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/10 sm:flex-none";

// Mounted once in the root layout. Decides on the first client render whether
// to count this visit, ask first, or stay off, and counts client-side page changes.
export default function Analytics() {
  const pathname = usePathname();
  const status = useAnalyticsStatus();

  useEffect(() => {
    if (getStatus() !== "idle") return;
    if (privacySignalOn()) blockedBySignal();
    else if (shouldAskFirst()) askFirst();
    else void startAnalytics(window.location.pathname);
  }, []);

  useEffect(() => {
    if (getStatus() === "on") trackPage(pathname);
  }, [pathname]);

  if (status !== "asking") return null;

  // Two buttons of equal weight. The answer lasts for this visit only,
  // because the site saves nothing on the device to remember it.
  return (
    <div
      role="region"
      aria-label="Visit counting"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/15 bg-background-elev/95 p-4 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:gap-5">
        <p className="text-sm leading-relaxed text-muted">
          May I count your visit? It shows me which parts of this page help. No cookies, and
          nothing is saved on your device.{" "}
          <a href="/privacy" className="text-foreground underline underline-offset-2">
            Privacy
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" className={BUTTON} onClick={() => void startAnalytics(pathname)}>
            Count my visit
          </button>
          <button type="button" className={BUTTON} onClick={stopAnalytics}>
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}

// The control on the privacy page: shows what is happening on this visit and lets the visitor change it.
export function AnalyticsChoice() {
  const pathname = usePathname();
  const status = useAnalyticsStatus();

  if (status === "idle") return null;

  if (status === "signal") {
    return (
      <p className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-muted">
        Your browser sends Global Privacy Control or Do Not Track, so nothing about this visit is
        counted.
      </p>
    );
  }

  const on = status === "on";
  return (
    <div className="mt-3 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm leading-relaxed text-muted">
        {on ? "This visit is being counted." : "This visit is not being counted."}
      </p>
      <button
        type="button"
        className={BUTTON}
        onClick={() => (on ? stopAnalytics() : void startAnalytics(pathname))}
      >
        {on ? "Stop counting this visit" : "Count this visit"}
      </button>
    </div>
  );
}
