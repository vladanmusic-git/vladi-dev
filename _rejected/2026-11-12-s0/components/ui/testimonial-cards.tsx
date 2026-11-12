"use client";

import * as React from "react";
import { motion } from "framer-motion";

export type CardPosition = "front" | "middle" | "back";

export interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: CardPosition;
  author: string;
  /** Initials shown in the avatar circle (real people only, no stock faces). */
  initials: string;
}

// Draggable shuffle card. Swipe the front card left to cycle the stack.
// Populate with REAL quotes only; this never ships fabricated testimonials.
export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  author,
  initials,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      animate={{
        rotate:
          position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
      }}
      drag
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e) => {
        dragRef.current = (e as PointerEvent).clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - (e as PointerEvent).clientX > 150) handleShuffle();
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`glass-strong absolute left-0 top-0 grid h-[450px] w-[330px] select-none place-content-center space-y-6 rounded-2xl border border-card-border p-6 shadow-xl ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xl font-bold text-[#05060a]">
        {initials}
      </div>
      <span className="text-center text-lg italic text-muted">
        &ldquo;{testimonial}&rdquo;
      </span>
      <span className="text-center text-sm font-medium text-accent-2">{author}</span>
    </motion.div>
  );
}
