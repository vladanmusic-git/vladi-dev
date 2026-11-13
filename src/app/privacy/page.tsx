import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnalyticsChoice } from "@/components/Analytics";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy | ${SITE.name}`,
  description: "What this website collects and who processes it.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

// Keep this page in step with src/lib/analytics.ts and the PostHog project
// settings (IP discarded, country and region only). Every word here must stay true.
const SECTIONS: { heading: string; body: string; items?: string[]; extra?: ReactNode }[] = [
  {
    heading: "What this site counts",
    body: "I count visits with PostHog so I can see which parts of this page are useful. For each visit it records:",
    items: [
      "the pages you view and when you leave them",
      "the site that sent you here, and any campaign tags in the link you followed (such as utm_source, src or t)",
      "your country and region, looked up from your IP address; the IP address itself is thrown away and never stored",
      "your device type, screen size, language and time zone, and your browser and operating system",
      "clicks on the Hire me on Upwork buttons",
      "how far down the page you scroll, and which sections come into view",
    ],
  },
  {
    heading: "What it does not do",
    body: "There are no cookies, and nothing is stored on your device: no local storage and no session storage. Each visit gets a random number that lives only in your browser's memory and is gone when you reload or close the page, so visits cannot be linked to each other or to you. There are no names, emails or accounts, no profiles of people, no session recordings and no ad trackers.",
  },
  {
    heading: "Your choice",
    body: "If your browser sends Global Privacy Control or Do Not Track, the counting script is never loaded. If your device is set to a European time zone, nothing is counted unless you choose Count my visit. Because nothing is saved on your device, the site cannot remember your answer next time; to turn counting off for good, switch on Global Privacy Control or Do Not Track in your browser.",
    extra: <AnalyticsChoice />,
  },
  {
    heading: "Who processes your visit",
    body: "The site is hosted by Vercel, which keeps standard server logs (such as your IP address, browser type and the page you asked for) to run and protect the service. The 3D background on the home page is loaded from Spline's servers, which receive the same basic request details. PostHog processes the visit counts for me on servers in the United States and keeps them for up to one year. Each acts under its own privacy policy and terms.",
  },
  {
    heading: "Links to Upwork",
    body: "The buttons that say Hire me on Upwork open Upwork. What you do there is covered by Upwork's own privacy policy.",
  },
  {
    heading: "Questions",
    body: "Send them through my Upwork profile.",
  },
];

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy</h1>
        <p className="mt-3 text-sm text-subtle">Last updated November 12, 2026</p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-semibold">{s.heading}</h2>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              {s.items && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {s.extra}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
