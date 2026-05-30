"use client";

const VARIANTS = [
  { href: "/", label: "Aurora" },
  { href: "/v/aurora", label: "Aurora + icons" },
  { href: "/v/galaxy", label: "Galaxy 3D" },
  { href: "/v/scroll", label: "Scroll morph" },
];

// Floating compare bar so Vladi can hop between hero variants. Preview-only.
export default function VariantSwitcher({ current }: { current: string }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-[60] -translate-x-1/2">
      <div className="glass-strong flex items-center gap-1 rounded-full border border-card-border px-2 py-1.5 text-xs shadow-xl">
        <span className="px-2 text-subtle">Compare:</span>
        {VARIANTS.map((v) => (
          <a
            key={v.href}
            href={v.href}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              current === v.href
                ? "bg-gradient-to-r from-accent to-accent-2 font-semibold text-[#05060a]"
                : "text-muted hover:bg-white/10 hover:text-foreground"
            }`}
          >
            {v.label}
          </a>
        ))}
      </div>
    </div>
  );
}
