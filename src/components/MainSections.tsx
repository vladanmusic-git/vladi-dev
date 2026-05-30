import TechStrip from "@/components/TechStrip";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

// Everything below the hero, shared across hero variants.
export default function MainSections() {
  return (
    <>
      <TechStrip />
      <Stats />
      <Portfolio />
      <Capabilities />
      <About />
      <Journey />
      <Contact />
    </>
  );
}
