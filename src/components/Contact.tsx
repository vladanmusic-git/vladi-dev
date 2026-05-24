import { Mail, ArrowRight } from "lucide-react";
import { SITE, LINKS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeUp">
          <div className="relative mx-auto max-w-2xl">
            {/* Glow blob behind card */}
            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-accent/10 via-purple-500/5 to-pink-500/10 blur-3xl" />

            {/* Gradient border card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-accent via-purple-500 to-pink-500 p-px">
              <div className="rounded-3xl bg-background px-8 py-14 text-center md:px-14">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Let&apos;s Build Something Together
                </h2>
                <p className="mt-4 text-lg text-muted">
                  Tell me about your project. I respond within 24 hours.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    <Mail className="h-5 w-5" />
                    Email Me
                  </a>
                  <a
                    href={LINKS.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3.5 font-medium transition-all hover:border-accent/50 hover:bg-card"
                  >
                    Hire on Upwork
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <p className="mt-8 text-sm text-muted">
                  Based in Los Angeles. Available for remote work worldwide.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
