"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, FileDown } from "lucide-react";
import { HERO, CV_DOWNLOAD, SITE } from "@/lib/constants";
import AnimateIn from "../AnimateIn";
import TypeWriter from "../TypeWriter";
import Aurora from "../ui/Aurora";

// Tech chips that drift around the headshot.
const CHIPS = [
  { label: "Anthropic", top: "-6%", left: "-18%" },
  { label: "MCP", top: "12%", left: "108%" },
  { label: "OpenAI", top: "44%", left: "-26%" },
  { label: "TypeScript", top: "70%", left: "104%" },
  { label: "Next.js", top: "100%", left: "8%" },
  { label: "Bun", top: "92%", left: "78%" },
];

export default function HeroFloatingIcons() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <Aurora />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pt-36 pb-20 md:flex-row md:items-center md:gap-16 md:pt-48 md:pb-28">
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
        </AnimateIn>

        <AnimateIn variant="scaleIn" className="flex-shrink-0">
          <div className="relative">
            {/* Floating tech chips */}
            <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
              {CHIPS.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  className="absolute whitespace-nowrap rounded-full border border-card-border bg-background-elev/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur"
                  style={{ top: chip.top, left: chip.left }}
                  animate={reduce ? undefined : { y: [0, -10, 0] }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  {chip.label}
                </motion.span>
              ))}
            </div>

            <div className="animate-float relative">
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
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
