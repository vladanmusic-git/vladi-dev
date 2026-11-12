import { STATS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass-card card-hover rounded-2xl px-4 py-7 text-center"
              >
                <AnimatedCounter value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
