import { Terminal, Network, Phone, Smartphone, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import AnimateIn from "./AnimateIn";
import SpotlightCard from "./ui/SpotlightCard";

const iconMap = {
  terminal: Terminal,
  network: Network,
  phone: Phone,
  smartphone: Smartphone,
};

// Bento spans: featured toolchain (0) and consumer app (3) go wide.
const spanClass = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

// Filenames shown in each card's terminal title bar.
const files = [
  "agent-toolchain.ts",
  "bot-fleet.ts",
  "voice-agent.ts",
  "consumer-app.tsx",
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
            Selected work
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Selected AI systems I built
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Agentic platforms and tooling first, then voice, then the apps that
            run on top. All built solo.
          </p>
        </AnimateIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = iconMap[project.icon];
            const wide = project.featured || i === 3;
            return (
              <AnimateIn
                key={project.title}
                variant="fadeUp"
                delay={i * 0.07}
                className={cn(spanClass[i])}
              >
                <SpotlightCard
                  className={cn(
                    "group flex h-full flex-col overflow-hidden",
                    project.featured && "border-beam",
                  )}
                >
                  {/* Terminal window title bar */}
                  <div className="flex items-center gap-3 border-b border-card-border bg-white/[0.02] px-4 py-3">
                    <span className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </span>
                    <span className="font-mono text-xs text-subtle">
                      {files[i]}
                    </span>
                    <span className="ml-auto rounded-full border border-card-border bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium text-foreground/60">
                      {project.badge}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-card-border bg-gradient-to-br from-accent/20 to-accent-2/10">
                      <Icon className="h-5 w-5 text-accent-2" />
                    </div>

                    <h3
                      className={cn(
                        "mt-5 font-bold tracking-tight",
                        wide ? "text-2xl md:text-3xl" : "text-xl",
                      )}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs">
                      <span className="text-accent-2">❯</span>{" "}
                      <span className="text-muted">{project.tagline}</span>
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-card-border bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimateIn>
            );
          })}
        </div>

        <p className="mt-10 flex items-center justify-center gap-1.5 text-sm text-muted">
          Need something like this?
          <a href="#contact" className="link-underline inline-flex items-center gap-1 text-foreground">
            Work with me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
