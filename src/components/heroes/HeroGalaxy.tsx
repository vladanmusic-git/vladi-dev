"use client";

import { Suspense, lazy } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, FileDown } from "lucide-react";
import { HERO, CV_DOWNLOAD, SITE } from "@/lib/constants";
import TypeWriter from "../TypeWriter";

const Spline = lazy(() => import("@splinetool/react-spline"));

const CHIPS = [
  { label: "Anthropic", top: "-7%", left: "-16%" },
  { label: "MCP", top: "10%", left: "104%" },
  { label: "OpenAI", top: "46%", left: "-24%" },
  { label: "TypeScript", top: "72%", left: "100%" },
  { label: "Next.js", top: "100%", left: "10%" },
  { label: "Bun", top: "92%", left: "76%" },
];

export default function HeroGalaxy() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* 3D galaxy backdrop (external Spline scene, lazy-loaded) */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-full w-full bg-background" />}>
          <Spline
            scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center gap-12 px-6 py-32 md:flex-row md:justify-between md:py-0">
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
              href={`mailto:${SITE.email}`}
              className="glass-card inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-foreground transition-all hover:bg-white/5"
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
        </div>

        {/* Headshot + floating tech icons */}
        <div className="pointer-events-auto relative flex-shrink-0">
          <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
            {CHIPS.map((chip, i) => (
              <motion.span
                key={chip.label}
                className="absolute whitespace-nowrap rounded-full border border-card-border bg-background-elev/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur"
                style={{ top: chip.top, left: chip.left }}
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>
          <div className="animate-float relative">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-violet-500/25 via-cyan-500/15 to-fuchsia-500/15 blur-3xl" />
            <div className="gradient-ring border-beam relative rounded-[2rem] shadow-2xl">
              <div className="relative h-60 w-60 overflow-hidden rounded-[calc(2rem-2px)] md:h-72 md:w-72">
                <Image
                  src="/images/vladi-headshot.png"
                  alt="Vladi Mijatovic"
                  fill
                  sizes="(max-width: 768px) 240px, 288px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
