import TechStrip from "@/components/TechStrip";
import Portfolio from "@/components/Portfolio";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";

// Everything below the hero, shared across hero variants.
// 2026-11-12 (S0): the stats count-ups, the "Shipped" image ring and the
// reviews section are off the page: none of them could be backed by a real
// source. Their component files moved to _rejected/2026-11-12-s0/.
export default function MainSections() {
  return (
    <>
      <TechStrip />
      <Portfolio />
      <Capabilities />
      <About />
      <Contact />
    </>
  );
}
