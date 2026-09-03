import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  Check,
  ExternalLink,
  Globe,
  Lock,
  Mail,
  PhoneCall,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SITE } from "@/lib/constants";
import { BOOKING_LINK, payLink, type StudioSku } from "@/lib/studio-links";

const PAGE_TITLE = "AI Work Studio by Vladi Mijatovic";
const PAGE_DESCRIPTION =
  "I direct AI coding agents so you get software done at half the usual price while I earn my first reviews. Private AI assistants, AI receptionists for local businesses, starter websites in 72 hours, Claude Code and OpenClaw setup and hardening.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/studio` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE.url}/studio`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const STATUS_LINE =
  "US citizen, Los Angeles, US hours, no visa sponsorship needed.";

const AI_DISCLOSURE = "This is an AI assistant, not a person.";

type Offer = {
  sku: StudioSku;
  number: string;
  icon: LucideIcon;
  title: string;
  who: string;
  price: string;
  priceNote: string;
  market: string;
  delivery: string;
  includes: string[];
  disclosure?: string;
  pitch?: string;
};

const OFFERS: Offer[] = [
  {
    sku: "assistant",
    number: "01",
    icon: Bot,
    title: "Your own private AI assistant, set up and run for you",
    who: "For founders, owners and busy people who want one assistant that knows their stuff and lives in the chat app they already use.",
    price: "$149 setup + $99 a month",
    priceNote: "Founding rate",
    market:
      "After five reviews: $300 to $800 setup + $150 to $300 a month.",
    delivery: "Live in 3 to 5 days",
    includes: [
      "Runs on your own API key and your own Telegram or WhatsApp",
      "On a small server you pay for, or on your laptop",
      "Wired to the tools you use: calendar, email, notes, files",
      "Keys, permissions and backups locked down before handover",
      "Keep-it-running plan: updates, monitoring and fixes, $99 a month",
    ],
    disclosure: AI_DISCLOSURE,
  },
  {
    sku: "receptionist",
    number: "02",
    icon: PhoneCall,
    title: "AI receptionist or intake for a local service business",
    who: "For dentists, plumbers, roofers, small law offices and med spas that miss calls and lose the job to whoever picks up first.",
    price: "$299 setup + $149 a month",
    priceNote: "Founding rate",
    market: "After five reviews: about double.",
    delivery: "Live in 5 to 7 days",
    includes: [
      "Answers every call, day and night, under your business name",
      "Books appointments, takes messages, answers the usual questions",
      "Texts you a summary after every call",
      "White-labeled on a proven voice stack, you keep your number",
      "Hear a demo on a 15-minute call",
    ],
    disclosure: "Callers always hear that they are talking to an AI.",
  },
  {
    sku: "website",
    number: "03",
    icon: Globe,
    title: "Starter business website in 72 hours",
    who: "For any local business that needs a clean site that works on a phone and gets the call, without a six-week agency project.",
    price: "$299 to $499 by scope",
    priceNote: "Founding rate, one-time",
    market: "After five reviews: about double.",
    delivery: "Live in 72 hours",
    includes: [
      "Up to 3 pages, template-based, mobile-first",
      "Click-to-call and a lead form that emails you",
      "Google-ready: titles, descriptions, sitemap, Business Profile link",
      "Your domain, your hosting, your accounts",
      "One round of edits included",
    ],
  },
  {
    sku: "hardening",
    number: "04",
    icon: ShieldCheck,
    title: "Claude Code, OpenClaw or Hermes setup and security hardening",
    who: "For anyone running an AI agent on their own machine or server who wants it configured properly and not leaking keys.",
    price: "$150 to $400 by scope",
    priceNote: "Founding rate, one-time",
    market: "After five reviews: about double.",
    delivery: "Done in 24 to 48 hours",
    includes: [
      "Install and configure Claude Code, OpenClaw or Hermes",
      "Lock down keys, permissions and network exposure",
      "Remove risky skills, pin what stays, set up backups",
      "Written handover: what runs where and how to update it",
    ],
    pitch:
      "Tens of thousands of OpenClaw instances sit exposed on the open internet, one-click remote code execution bugs have shipped in the wild, and the skill registries carry malicious packages. An hour of care up front is cheaper than a leaked key.",
  },
];

type ProofApp = {
  name: string;
  caption: string;
  detail: string;
  links: Array<{ label: string; href: string }>;
  shots: Array<{ src: string; alt: string; width: number; height: number }>;
};

const PROOF_APPS: ProofApp[] = [
  {
    name: "Jazz Piano Master",
    caption: "Jazz Piano Master, live on the App Store and Google Play",
    detail: "Subscription app, live in both stores.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/jazz-piano-master/id6759475146",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.jazzpianomaster.app",
      },
    ],
    shots: [
      { src: "/images/studio/jpm-1.jpg", alt: "Jazz Piano Master app screen 1", width: 600, height: 1300 },
      { src: "/images/studio/jpm-2.jpg", alt: "Jazz Piano Master app screen 2", width: 600, height: 1300 },
      { src: "/images/studio/jpm-3.jpg", alt: "Jazz Piano Master app screen 3", width: 600, height: 1300 },
    ],
  },
  {
    name: "Svet Brojeva",
    caption: "Svet Brojeva, live on Google Play and the web, 538 purchases",
    detail: "AI report pipeline, subscriptions and one-time purchases.",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.svetbrojeva.rs.app",
      },
      { label: "svetbrojeva.com", href: "https://svetbrojeva.com" },
    ],
    shots: [
      { src: "/images/studio/sb-01.jpg", alt: "Svet Brojeva app screen 1", width: 600, height: 1190 },
      { src: "/images/studio/sb-03.jpg", alt: "Svet Brojeva app screen 2", width: 600, height: 1190 },
      { src: "/images/studio/sb-07.jpg", alt: "Svet Brojeva app screen 3", width: 600, height: 1190 },
    ],
  },
];

const CODE_SHOTS = [
  {
    src: "/images/studio/code-stripe-client.png",
    alt: "billing/stripe-client.ts: lazy Stripe singleton and idempotency keys",
    label: "billing/stripe-client.ts",
    width: 1100,
    height: 1192,
  },
  {
    src: "/images/studio/code-provisioning.png",
    alt: "provisioning/provisioning-lib.ts: systemd unit rendered per tenant",
    label: "provisioning/provisioning-lib.ts",
    width: 1100,
    height: 1066,
  },
];

const PLATFORM_FACTS = [
  { value: "353,000", label: "lines of TypeScript" },
  { value: "864", label: "test files" },
  { value: "1", label: "person who built it" },
];

const STEPS = [
  {
    number: "1",
    icon: CalendarClock,
    title: "A 15-minute call",
    body: "You tell me what you need. I tell you plainly what I can get live, by when, and what it costs. No slides, no proposal deck.",
  },
  {
    number: "2",
    icon: Lock,
    title: "I work on your accounts",
    body: "Everything runs on your API keys, your hosting, your phone number. You grant time-limited access, I build, you watch it come alive, and the access expires when we are done.",
  },
  {
    number: "3",
    icon: Check,
    title: "You pay when it is live",
    body: "Setup is due on go-live day, or up front through the pay link if you want to skip the call. The monthly plan starts the day it goes live. Founding clients leave a review and a one-sentence quote. That is the whole deal.",
  },
];

const FAQ = [
  {
    q: "Is this an AI or a person?",
    a: "Vladi is a person. You talk to me on the call, I do the work, I answer your emails. The assistants and receptionists you buy are AI, and they always say so. Every assistant carries the line \"This is an AI assistant, not a person\", and every receptionist tells callers it is an AI.",
  },
  {
    q: "Why half price?",
    a: "I am new to selling this work under my own name and I have no reviews yet. The founding rate is half of what the same work costs elsewhere, and it holds until my first five reviews are in. After that, new clients pay the market rate. Founding clients keep their founding monthly rate.",
  },
  {
    q: "Who holds my keys, passwords and accounts?",
    a: "You do. Everything is set up on your own API key, your own server or laptop, your own phone number and domain. I work through time-limited access that you grant and can revoke, and I never keep client credentials on my machine. When the work is done, the access ends and you keep everything.",
  },
  {
    q: "What if it does not work, or I want to stop?",
    a: "Setup is paid when it is live. If you paid up front through the pay link and I cannot get it live on your accounts, you get the setup fee back. The monthly plan can be cancelled any time with a one-line email, and you keep everything that lives on your accounts.",
  },
];

const NAV = [
  { label: "Offers", href: "#offers" },
  { label: "Proof", href: "#proof" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

function BookButton({
  className = "",
  label = "Book a 15-minute call",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={BOOKING_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-[#05060a] transition-all hover:shadow-xl hover:shadow-cyan-500/20 ${className}`}
    >
      <CalendarClock className="h-4 w-4" />
      {label}
    </a>
  );
}

function PayButton({ sku, className = "" }: { sku: StudioSku; className?: string }) {
  const { href, label } = payLink(sku);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-card-border-strong hover:bg-white/5 ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
      {children}
    </p>
  );
}

function StudioHeader() {
  return (
    <header className="relative z-20 border-b border-card-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-[#05060a]">
            VM
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground/90">
            Vladi Mijatovic
          </span>
          <span className="hidden text-sm text-subtle sm:inline">/ Studio</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden text-sm text-muted transition-colors hover:text-foreground lg:inline"
          >
            Portfolio
          </Link>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-card-border bg-white/5 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-card-border-strong"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="max-w-3xl">
          <Eyebrow>AI Work Studio</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">AI Work Studio</span> by Vladi
            Mijatovic.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-foreground/85 md:text-2xl">
            I direct AI coding agents so you get software done at half the
            usual price while I earn my first reviews.
          </p>
          <p className="mt-4 text-base text-muted">{STATUS_LINE}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookButton className="px-7 py-3.5 text-base" />
            <a
              href="#offers"
              className="glass-card group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:border-card-border-strong hover:bg-white/5"
            >
              See the offers
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { value: "2 apps", label: "live in the stores, with paying users" },
            { value: "538", label: "purchases on a live product I run" },
            { value: "353,000", label: "lines of TypeScript shipped solo" },
          ].map((s) => (
            <div key={s.label} className="glass-card flex flex-col rounded-2xl px-5 py-4">
              <dt className="order-2 text-sm text-muted">{s.label}</dt>
              <dd className="text-2xl font-bold tracking-tight text-foreground">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  const Icon = offer.icon;
  return (
    <SpotlightCard className="flex h-full flex-col p-7 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-card-border bg-white/5 text-accent-hover">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-subtle">
          {offer.number}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight md:text-2xl">
        {offer.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{offer.who}</p>

      <div className="mt-6 rounded-2xl border border-card-border bg-white/[0.03] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-2">
          {offer.priceNote}
        </p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">
          {offer.price}
        </p>
        <p className="mt-1 text-xs text-subtle">{offer.market}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/85">
          <CalendarClock className="h-4 w-4 text-accent-2" />
          {offer.delivery}
        </p>
      </div>

      <ul className="mt-6 space-y-2.5">
        {offer.includes.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
            <Check className="mt-1 h-4 w-4 shrink-0 text-accent-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {offer.pitch && (
        <p className="mt-5 rounded-xl border border-accent/25 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground/85">
          {offer.pitch}
        </p>
      )}

      {offer.disclosure && (
        <p className="mt-5 text-xs text-subtle">{offer.disclosure}</p>
      )}

      <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2">
        <BookButton className="w-full" />
        <PayButton sku={offer.sku} className="w-full" />
      </div>
    </SpotlightCard>
  );
}

function Offers() {
  return (
    <section id="offers" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>The offers</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Four things I build, at the founding rate.
          </h2>
          <p className="mt-4 text-muted">
            Half the market price until my first five reviews are in. Every
            one runs on your own accounts, with time-limited access, and you
            keep everything when we are done.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.sku} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppProof({ app }: { app: ProofApp }) {
  return (
    <div className="glass-card rounded-3xl p-5 md:p-7">
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {app.shots.map((shot) => (
          <div
            key={shot.src}
            className="overflow-hidden rounded-2xl border border-card-border bg-background-elev"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(max-width: 768px) 30vw, 180px"
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold text-foreground">{app.caption}</p>
          <p className="mt-1 text-sm text-muted">{app.detail}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          {app.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-white/5 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-card-border-strong"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5 text-subtle" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Proof() {
  return (
    <section id="proof" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>Proof</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Live products with real users.
          </h2>
          <p className="mt-4 text-muted">
            Not mockups. Both apps are in the stores today, both bill real
            customers, and both were built and are run by one person.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROOF_APPS.map((app) => (
            <AppProof key={app.name} app={app} />
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <Eyebrow>Code proof</Eyebrow>
          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Stripe billing and per-user server provisioning from a
            353,000-line TypeScript platform I built solo (864 test files).
          </h3>
          <p className="mt-4 text-muted">
            Two real files from the platform, secrets and internal names
            removed. Idempotent billing so a retry never double-charges, and a
            per-tenant systemd unit so every customer gets an isolated server.
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {CODE_SHOTS.map((shot) => (
            <figure
              key={shot.src}
              className="overflow-hidden rounded-2xl border border-card-border bg-background-elev"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(max-width: 1152px) 100vw, 1104px"
                className="h-auto w-full"
              />
              <figcaption className="sr-only">{shot.label}</figcaption>
            </figure>
          ))}
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {PLATFORM_FACTS.map((f) => (
            <div key={f.label} className="glass-card rounded-2xl px-5 py-4">
              <dd className="text-2xl font-bold tracking-tight text-foreground">
                {f.value}
              </dd>
              <dt className="text-sm text-muted">{f.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Three steps, no surprises.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="glass-card card-hover relative rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-white/5 text-accent-hover">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-gradient-accent text-3xl font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              The four things everyone asks.
            </h2>
            <p className="mt-4 text-muted">
              Anything else, email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="link-underline text-foreground"
              >
                {SITE.email}
              </a>{" "}
              or grab a slot on the calendar.
            </p>
            <BookButton className="mt-6" />
          </div>

          <dl className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="glass-card rounded-2xl p-6 md:p-7">
                <dt className="text-lg font-semibold tracking-tight">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative mx-auto max-w-3xl">
          <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-violet-500/15 via-cyan-500/10 to-fuchsia-500/10 blur-3xl" />
          <div className="border-beam glass-strong relative rounded-3xl px-8 py-12 text-center md:px-14">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Fifteen minutes, then a straight answer.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Tell me what you need. I will tell you what I can get live, by
              when, and what it costs at the founding rate.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <BookButton className="px-7 py-3.5 text-base" />
              <a
                href={`mailto:${SITE.email}`}
                className="glass-card inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:border-card-border-strong hover:bg-white/5"
              >
                <Mail className="h-5 w-5" />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioFooter() {
  return (
    <footer className="border-t border-card-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground/90">
            AI Work Studio by Vladi Mijatovic
          </p>
          <p className="mt-1 text-xs text-subtle">Los Angeles, US hours</p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {SITE.email}
          </a>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <CalendarClock className="h-4 w-4" />
            Book a 15-minute call
          </a>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Portfolio
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-2xl px-6 text-center text-xs text-subtle">
        Vladi is a person. Every assistant and receptionist sold here is an AI
        and says so. &copy; {new Date().getFullYear()} Vladi Mijatovic
      </p>
    </footer>
  );
}

export default function StudioPage() {
  return (
    <>
      <StudioHeader />
      <main>
        <Hero />
        <Offers />
        <Proof />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <StudioFooter />
    </>
  );
}
