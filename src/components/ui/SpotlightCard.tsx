"use client";

import { useRef, ReactNode, PointerEvent } from "react";
import { cn } from "@/lib/cn";

// Card wrapper with a soft glow that follows the cursor. The glow is a CSS
// pseudo-element (.spotlight-card::before) driven by --mx / --my we set here.
export default function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn("spotlight-card card-hover glass-card rounded-2xl", className)}
    >
      {children}
    </div>
  );
}
