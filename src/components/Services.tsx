import { Smartphone, Globe, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  sparkles: Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          What I Build
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Complete solutions from concept to deployment. I handle design,
          development, backend, payments, and store submission.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-card-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
