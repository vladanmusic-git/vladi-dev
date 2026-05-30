import { Mail, ArrowRight, Linkedin, FileDown } from "lucide-react";
import { SITE, LINKS, CV_DOWNLOAD } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeUp">
          <div className="relative mx-auto max-w-3xl">
            <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-violet-500/15 via-cyan-500/10 to-fuchsia-500/10 blur-3xl" />

            <div className="border-beam glass-strong relative rounded-3xl px-8 py-14 text-center md:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Building something with AI agents?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Tell me what you are building. I reply within 24 hours.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <a
                  href={`mailto:${SITE.email}`}
                  className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-[#05060a] transition-all hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <Mail className="h-5 w-5" />
                  {SITE.email}
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-all hover:border-card-border-strong hover:bg-white/5"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={CV_DOWNLOAD}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-medium text-muted transition-colors hover:text-foreground"
                >
                  <FileDown className="h-4 w-4" />
                  Download CV
                </a>
              </div>

              <p className="mt-8 text-sm text-subtle">
                Available remote, US hours.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
