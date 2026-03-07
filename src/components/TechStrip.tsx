import AnimateIn from "./AnimateIn";

const TECH = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Claude API",
  "OpenAI",
  "Supabase",
  "n8n",
  "Tailwind CSS",
];

export default function TechStrip() {
  return (
    <div className="py-8">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 px-6">
        <AnimateIn variant="fadeIn">
          <span className="text-xs font-medium uppercase tracking-widest text-muted">
            Built with
          </span>
        </AnimateIn>
        {TECH.map((name, i) => (
          <AnimateIn key={name} variant="fadeUp" delay={0.05 * (i + 1)}>
            <span className="rounded-full border border-card-border bg-card px-4 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-foreground">
              {name}
            </span>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
