// Presentational hero backdrop: drifting aurora + ambient blobs + dotted grid.
// Motion is CSS-driven and disabled via prefers-reduced-motion in globals.css.
export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Top vignette for header legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
