"use client";

import { useRef, ReactNode, PointerEvent } from "react";
import { cn } from "@/lib/cn";

// Subtle 3D tilt toward the cursor. Writes transform directly on the ref so it
// never re-renders. Respects prefers-reduced-motion (no tilt when set).
export default function Tilt({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function reduced() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || reduced()) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg)`;
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ transition: "transform 0.3s ease", transformStyle: "preserve-3d" }}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
