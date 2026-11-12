import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy | ${SITE.name}`,
  description: "What this website collects and who processes it.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

const SECTIONS = [
  {
    heading: "What this site collects",
    body: "Nothing on purpose. There are no cookies, no analytics, no ad trackers and no forms on this site, and it never asks for your name or email.",
  },
  {
    heading: "Who processes your visit",
    body: "The site is hosted by Vercel, which keeps standard server logs (such as your IP address, browser type and the page you asked for) to run and protect the service. The 3D background on the home page is loaded from Spline's servers, which receive the same basic request details. Both act under their own privacy policies.",
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
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
