import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

// 2026-11-12 (S0): the only way to reach Vladi from this site is his Upwork
// profile. No email, LinkedIn or CV here, so nothing moves a buyer off Upwork.
export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeUp">
          <div className="relative mx-auto max-w-3xl">
            <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-violet-500/15 via-cyan-500/10 to-fuchsia-500/10 blur-3xl" />

            <div className="border-beam glass-strong relative rounded-3xl px-8 py-14 text-center md:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
                Work with me
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Building something with AI agents?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Send me the job on Upwork. We agree the scope and how we will
                check the result before I start.
              </p>

              <div className="mt-9 flex justify-center">
                <a
                  href={LINKS.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-upwork-click="contact"
                  className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-[#05060a] transition-all hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  Hire me on Upwork
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
