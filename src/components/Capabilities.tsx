import { Brain, Terminal, Plug, Phone, Layers, CreditCard } from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";
import AnimateIn from "./AnimateIn";
import SpotlightCard from "./ui/SpotlightCard";

const iconMap = {
  brain: Brain,
  terminal: Terminal,
  plug: Plug,
  phone: Phone,
  layers: Layers,
  creditCard: CreditCard,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
            Capabilities
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            What I build, end to end
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            From the agent loop and the model routing down to the billing,
            security, and uptime. One engineer, the whole stack.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = iconMap[cap.icon];
            return (
              <AnimateIn key={cap.title} variant="fadeUp" delay={i * 0.06}>
                <SpotlightCard className="group h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-card-border bg-gradient-to-br from-accent/20 to-accent-2/10 transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6 text-accent-2" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {cap.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cap.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-card-border bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
