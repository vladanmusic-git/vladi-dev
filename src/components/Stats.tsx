import { STATS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-card-border py-16">
      {/* Gradient mesh */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-fuchsia-500/5" />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="relative text-center">
                {i > 0 && (
                  <div className="absolute top-1/2 left-0 hidden h-10 w-px -translate-y-1/2 bg-card-border md:block" />
                )}
                <AnimatedCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
