import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO, LINKS, GALLERY } from "@/lib/constants";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Featured Work
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Real projects I designed and built. Every pixel, every line of code.
        </p>

        {/* Hero project - Svet Brojeva with screenshots */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-card-border bg-card">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Screenshots side */}
            <div className="relative grid grid-cols-2 gap-3 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 md:p-8">
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/portfolio/ai-sara-chatbot.png"
                  alt="Sara AI Chatbot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/portfolio/universum-premium.jpg"
                  alt="Svet Brojeva Universum"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Info side */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl">
                  <Image
                    src="/images/svet-brojeva-icon.png"
                    alt="Svet Brojeva"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  {PORTFOLIO.hero.title}
                </h3>
              </div>
              <p className="mt-2 text-sm font-medium text-accent">
                {PORTFOLIO.hero.subtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {PORTFOLIO.hero.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                  >
                    {stat}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">
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
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                View on Google Play
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary projects with images */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PORTFOLIO.secondary.map((project, i) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-card-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={
                    i === 0
                      ? "/images/portfolio/ai-assistant-voice.jpg"
                      : "/images/portfolio/premium-ai-monetization.jpg"
                  }
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted">
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
            </div>
          ))}
        </div>

        {/* Portfolio gallery */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            More Projects
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
            A selection of mobile apps, AI integrations, and UI designs across
            different industries.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((item) => (
              <div
                key={item.src}
                className="group relative overflow-hidden rounded-2xl border border-card-border"
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-white/70">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
