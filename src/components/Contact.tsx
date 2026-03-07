import { Mail, ArrowRight } from "lucide-react";
import { SITE, LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tell me about your project. I respond within 24 hours.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </a>
            <a
              href={LINKS.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-8 py-3.5 font-medium transition-colors hover:bg-card"
            >
              Hire on Upwork
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">
            Based in Los Angeles. Available for remote work worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
