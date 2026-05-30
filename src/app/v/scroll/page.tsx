import HeroScrollMorph from "@/components/heroes/HeroScrollMorph";
import VariantSwitcher from "@/components/VariantSwitcher";

export const metadata = { robots: { index: false } };

// Standalone: this effect captures wheel/scroll, so it cannot share a page with
// the rest of the site. Shown on its own for comparison.
export default function ScrollVariant() {
  return (
    <>
      <HeroScrollMorph />
      <a
        href="/"
        className="glass-strong fixed right-4 top-4 z-[60] rounded-full border border-card-border px-4 py-2 text-xs text-foreground"
      >
        View full site
      </a>
      <VariantSwitcher current="/v/scroll" />
    </>
  );
}
