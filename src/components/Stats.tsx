import { STATS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="border-y border-card-border bg-card py-16">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
