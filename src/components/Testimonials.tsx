"use client";

import { useState } from "react";
import { TestimonialCard, type CardPosition } from "./ui/testimonial-cards";
import AnimateIn from "./AnimateIn";

// Placeholder reviews. Swap for real client quotes before going fully public.
const REVIEWS = [
  {
    testimonial:
      "Vladi took us from idea to a production AI agent that handles real calls. He owned the whole stack, model routing down to billing, and it just worked.",
    author: "Founder, seed-stage startup",
    initials: "F",
  },
  {
    testimonial:
      "He built our internal Claude Code tooling and MCP setup. The team ships faster and cleaner now. Senior judgment, zero hand-holding.",
    author: "Engineering Lead",
    initials: "EL",
  },
  {
    testimonial:
      "End to end delivery. Supabase, payments, App Store, all of it. One person, the whole thing, done right and on time.",
    author: "Product Manager",
    initials: "PM",
  },
];

export default function Testimonials() {
  const [positions, setPositions] = useState<CardPosition[]>(["front", "middle", "back"]);

  const shuffle = () =>
    setPositions((prev) => {
      const next = [...prev];
      next.unshift(next.pop() as CardPosition);
      return next;
    });

  return (
    <section id="reviews" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
            Reviews
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            What clients say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Drag the top card to shuffle.
          </p>
        </AnimateIn>

        <div className="mt-16 flex justify-center">
          <div className="relative h-[450px] w-[330px] md:-translate-x-[110px]">
            {REVIEWS.map((review, i) => (
              <TestimonialCard
                key={review.initials}
                handleShuffle={shuffle}
                testimonial={review.testimonial}
                position={positions[i]}
                author={review.author}
                initials={review.initials}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
