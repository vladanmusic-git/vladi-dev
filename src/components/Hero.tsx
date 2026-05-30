"use client";

import Image from "next/image";
import { ArrowRight, Mail, FileDown } from "lucide-react";
import { HERO, CV_DOWNLOAD, SITE } from "@/lib/constants";
import AnimateIn from "./AnimateIn";
import TypeWriter from "./TypeWriter";
import Aurora from "./ui/Aurora";
import Tilt from "./ui/Tilt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Aurora />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pt-36 pb-20 md:flex-row md:items-center md:gap-16 md:pt-48 md:pb-28">
        {/* Text block */}
        <AnimateIn variant="fadeUp" className="flex-1 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-card-border bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available · {HERO.badge}
          </div>

          <h1 className="gradient-text text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {HERO.headline}
          </h1>

          <div className="mt-4 flex justify-center md:justify-start">
            <TypeWriter roles={HERO.roles} />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:mx-0">
            {HERO.subtext}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <a
              href="#work"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-[#05060a] shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/25"
            >
              {HERO.cta1}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="glass-card inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-foreground transition-all hover:border-card-border-strong hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
              {HERO.cta2}
            </a>
            <a
              href={CV_DOWNLOAD}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-medium text-muted transition-colors hover:text-foreground"
            >
              <FileDown className="h-4 w-4" />
              {HERO.cta3}
            </a>
          </div>
        </AnimateIn>

        {/* Headshot. Float on the outer element, tilt on the inner, so they compose. */}
        <AnimateIn variant="scaleIn" className="flex-shrink-0">
          <div className="animate-float">
            <Tilt>
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-violet-500/25 via-cyan-500/15 to-fuchsia-500/15 blur-3xl" />
                <div className="gradient-ring border-beam relative rounded-[2rem] shadow-2xl">
                  <div className="relative h-64 w-64 overflow-hidden rounded-[calc(2rem-2px)] md:h-80 md:w-80">
                    <Image
                      src="/images/vladi-headshot.png"
                      alt="Vladi Mijatovic"
                      fill
                      sizes="(max-width: 768px) 256px, 320px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
