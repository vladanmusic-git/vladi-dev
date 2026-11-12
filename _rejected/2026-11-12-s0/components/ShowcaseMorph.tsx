"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AnimateIn from "./AnimateIn";

type Phase = "scatter" | "line" | "circle";

const IMAGES = [
  "/images/portfolio/finance-dashboard.jpg",
  "/images/portfolio/healthcare-app.jpg",
  "/images/portfolio/agropulse-ai-farm.jpg",
  "/images/portfolio/shield-safety-app.jpg",
  "/images/portfolio/real-estate-app.jpg",
  "/images/portfolio/ai-notes-gpt.jpg",
  "/images/portfolio/premium-ai-monetization.jpg",
  "/images/portfolio/ai-assistant-voice.jpg",
];

const CARD_W = 84;
const CARD_H = 118;

function Card({
  src,
  target,
}: {
  src: string;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}) {
  return (
    <motion.div
      animate={{ x: target.x, y: target.y, rotate: target.rotation, scale: target.scale, opacity: target.opacity }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{ position: "absolute", width: CARD_W, height: CARD_H, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-card-border bg-background-elev shadow-lg" style={{ backfaceVisibility: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-transparent" />
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-xl border border-card-border bg-[#0a0c16] p-3 shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[8px] font-bold uppercase tracking-widest text-accent-2">Shipped</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ShowcaseMorph() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("scatter");
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [spin, setSpin] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) setSize({ w: e.contentRect.width, h: e.contentRect.height });
    });
    obs.observe(ref.current);
    setSize({ w: ref.current.offsetWidth, h: ref.current.offsetHeight });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 500);
    const t2 = setTimeout(() => setPhase("circle"), 2300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Gentle auto-rotation once formed (no scroll).
  useEffect(() => {
    if (phase !== "circle" || reduce) return;
    const id = setInterval(() => setSpin((s) => (s + 0.15) % 360), 50);
    return () => clearInterval(id);
  }, [phase, reduce]);

  const scatter = useMemo(
    () =>
      IMAGES.map(() => ({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 700,
        rotation: (Math.random() - 0.5) * 160,
        scale: 0.6,
        opacity: 0,
      })),
    [],
  );

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="aurora opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
            Shipped, not slides
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Apps and systems in production
          </h2>
        </AnimateIn>
      </div>

      <div ref={ref} className="relative mt-6 flex h-[440px] w-full items-center justify-center md:h-[520px]">
        <div className="relative flex h-full w-full items-center justify-center">
          {IMAGES.map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };
            if (phase === "scatter") {
              target = scatter[i];
            } else if (phase === "line") {
              const spacing = 96;
              target = { x: i * spacing - (IMAGES.length * spacing) / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const minDim = Math.min(size.w, size.h);
              const radius = Math.min(minDim * 0.36, 230);
              const angle = (i / IMAGES.length) * 360 + spin;
              const rad = (angle * Math.PI) / 180;
              target = {
                x: Math.cos(rad) * radius,
                y: Math.sin(rad) * radius,
                rotation: angle + 90,
                scale: 1,
                opacity: 1,
              };
            }
            return <Card key={src} src={src} target={target} />;
          })}
        </div>
      </div>
    </section>
  );
}
