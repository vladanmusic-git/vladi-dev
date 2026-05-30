import { TECH } from "@/lib/constants";

export default function TechStrip() {
  const row = [...TECH, ...TECH];
  return (
    <div className="border-y border-card-border bg-background-elev/40 py-7">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.25em] text-subtle">
          The stack I build on
        </p>
        <div className="fade-edges overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="mr-10 flex shrink-0 items-center gap-2.5 text-base font-medium text-muted transition-colors hover:text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
