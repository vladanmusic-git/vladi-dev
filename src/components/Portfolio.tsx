import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO, LINKS } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Featured Work
        </h2>

        {/* Hero project */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-card-border bg-card">
          <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="flex-shrink-0">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-lg md:h-36 md:w-36">
                <Image
                  src="/images/svet-brojeva-icon.png"
                  alt="Svet Brojeva App Icon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold md:text-3xl">
                {PORTFOLIO.hero.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {PORTFOLIO.hero.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {PORTFOLIO.hero.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {stat}
                  </span>
                ))}
              </div>
              <p className="mt-5 leading-relaxed text-muted">
                {PORTFOLIO.hero.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {PORTFOLIO.hero.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-card-border px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                View on Google Play
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {PORTFOLIO.secondary.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-card-border bg-card p-8"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-card-border px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
