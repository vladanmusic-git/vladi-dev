"use client";

import { useState } from "react";
import { TestimonialCard, type CardPosition } from "./ui/testimonial-cards";
import AnimateIn from "./AnimateIn";

const REVIEWS = [
  {
    testimonial:
      "Took us from idea to a production AI agent that handles real calls. Vladi owned the whole stack, model routing down to billing, and it just worked. Would hire again without hesitation.",
    author: "Daniel H., Startup Founder",
    initials: "DH",
  },
  {
    testimonial:
      "The subscription system made real revenue from day one. He set up payments, handled all the App Store compliance, and made sure everything worked before launch.",
    author: "Priya A., Product Lead",
    initials: "PA",
  },
  {
    testimonial:
      "Faster and cleaner than my previous agency at three times the cost. Clear communication, the code is well documented, and the team ships quicker now.",
    author: "Marcus R., CTO",
    initials: "MR",
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
