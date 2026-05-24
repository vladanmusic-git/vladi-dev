"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part and suffix
    const match = value.match(/^([\d.]+)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2]; // e.g. "+", "K+", "x", "%"
    const isK = suffix.includes("K");
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      const rounded = target >= 100 ? Math.round(current) : Number(current.toFixed(target % 1 === 0 ? 0 : 1));
      const formatted = isK ? `${rounded}K${suffix.replace("K", "")}` : `${rounded}${suffix}`;
      setDisplay(formatted);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="gradient-text text-3xl font-bold md:text-4xl">{display}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
