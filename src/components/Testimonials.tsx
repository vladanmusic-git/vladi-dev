import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Real feedback from real projects
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.author} variant="fadeUp" delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-card-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8">
                <Quote className="h-8 w-8 text-accent/30" />
                <p className="mt-4 flex-1 text-sm leading-relaxed italic text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {t.project}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
