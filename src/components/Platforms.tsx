import { Briefcase, ShoppingBag, Linkedin } from "lucide-react";
import { LINKS } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

const platforms = [
  {
    name: "Upwork",
    description: "Hire me for projects",
    url: LINKS.upwork,
    icon: Briefcase,
  },
  {
    name: "Fiverr",
    description: "Browse my gigs",
    url: LINKS.fiverr,
    icon: ShoppingBag,
  },
  {
    name: "LinkedIn",
    description: "Connect with me",
    url: LINKS.linkedin,
    icon: Linkedin,
  },
];

export default function Platforms() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Find Me On
          </h2>
        </AnimateIn>
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-3">
          {platforms.map((p, i) => (
            <AnimateIn key={p.name} variant="scaleIn" delay={i * 0.1}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-card-border bg-card p-8 text-center transition-shadow hover:shadow-lg"
              >
                <p.icon className="h-8 w-8 text-accent" />
                <p className="text-lg font-semibold">{p.name}</p>
                <p className="text-sm text-muted">{p.description}</p>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
