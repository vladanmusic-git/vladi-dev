"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HERO, LINKS } from "@/lib/constants";
import TypeWriter from "../TypeWriter";
import SafeSpline from "./SafeSpline";

export default function HeroGalaxy() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* 3D galaxy backdrop (external Spline scene, lazy-loaded, skipped without WebGL) */}
      <div className="absolute inset-0 z-0 bg-background">
        <SafeSpline scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Mask the Spline free-tier "Built with Spline" badge (bottom-right) */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-[2] h-24 w-60 bg-gradient-to-tl from-background via-background to-transparent" />
      </div>

      {/* Content */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <div className="pointer-events-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-card-border bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available · {HERO.badge}
          </div>
          <h1 className="gradient-text text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            {HERO.headline}
          </h1>
          <div className="mt-4">
            <TypeWriter roles={HERO.roles} />
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {HERO.subtext}
          </p>
          <div className="pointer-events-auto mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-[#05060a] shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/25"
            >
              {HERO.cta1}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={LINKS.upwork}
              target="_blank"
              rel="noopener noreferrer"
              data-upwork-click="hero"
              className="glass-card inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-foreground transition-all hover:bg-white/5"
            >
              {HERO.cta2}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
