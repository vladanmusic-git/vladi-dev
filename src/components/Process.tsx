"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

export default function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            How I Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            A clear process from idea to launch
          </p>
        </AnimateIn>

        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          {/* Animated connecting line (desktop only) */}
          <motion.div
            className="absolute top-10 right-8 left-8 hidden h-px origin-left bg-gradient-to-r from-accent/50 via-purple-500/50 to-pink-500/50 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />

          {PROCESS.map((p, i) => (
            <AnimateIn key={p.step} variant="fadeUp" delay={i * 0.15}>
              <div className="relative text-center">
                <motion.div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background text-xl font-bold text-accent shadow-lg shadow-accent/10"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  {p.step}
                </motion.div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
