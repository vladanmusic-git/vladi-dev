"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PROJECTS, LINKS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

const CATEGORIES = ["All", "Mobile App", "Web App", "AI System"] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured).filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            10+ apps published on the App Store and Google Play. Every pixel,
            every line of code.
          </p>
        </AnimateIn>

        {/* Featured project */}
        {featured && (
          <AnimateIn variant="fadeUp" className="mt-14">
            <div className="overflow-hidden rounded-3xl border border-card-border bg-card">
              <div className="grid gap-0 md:grid-cols-2">
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
                      {featured.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {featured.subtitle}
                  </p>
                  {featured.stats && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featured.stats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    {featured.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
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
          </AnimateIn>
        )}

        {/* Category filter */}
        <AnimateIn variant="fadeIn" className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "border border-card-border text-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Project grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <AnimateIn key={project.title} variant="fadeUp" delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-2xl border border-card-border bg-card transition-shadow hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/70">{project.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-accent">
                    {project.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
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
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
