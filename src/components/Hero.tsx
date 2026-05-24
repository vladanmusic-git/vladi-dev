"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/constants";
import AnimateIn from "./AnimateIn";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="animate-gradient absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(139,92,246,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(236,72,153,0.14) 0%, transparent 55%), radial-gradient(ellipse 70% 40% at 50% 50%, rgba(251,191,36,0.07) 0%, transparent 60%)",
          }}
        />
        {/* Ambient blobs */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-rose-500/8 blur-[80px]" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/6 blur-[60px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 px-6 pt-32 pb-20 md:flex-row md:pt-44 md:pb-32">
        {/* Text block */}
        <AnimateIn variant="fadeUp" className="flex-1 text-center md:text-left">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>

          <h1 className="gradient-text text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {HERO.headline}
          </h1>
          <div className="mt-3">
            <TypeWriter roles={HERO.roles} />
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {HERO.subtext}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#portfolio"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:bg-accent-hover hover:shadow-violet-500/50 hover:shadow-xl"
            >
              {HERO.cta1}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass-card rounded-full px-8 py-3.5 text-center font-semibold transition-all hover:border-violet-500/40 hover:shadow-md"
            >
              {HERO.cta2}
            </a>
          </div>
        </AnimateIn>

        {/* Profile photo */}
        <AnimateIn variant="scaleIn" className="flex-shrink-0">
          <div className="animate-float relative">
            {/* Large ambient glow */}
            <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-rose-500/25 blur-3xl" />
            {/* Soft glow ring */}
            <div className="absolute -inset-1 rounded-[2.25rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 opacity-60 blur-xl" />
            {/* Crisp gradient border ring */}
            <div className="gradient-ring relative shadow-2xl">
              <div className="relative h-64 w-64 overflow-hidden rounded-[calc(2rem-3px)] md:h-80 md:w-80">
                <Image
                  src="/images/profile.png"
                  alt="Vladi Mijatovic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
