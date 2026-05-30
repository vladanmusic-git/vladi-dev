import TechStrip from "@/components/TechStrip";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Capabilities from "@/components/Capabilities";
import ShowcaseMorph from "@/components/ShowcaseMorph";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

// Everything below the hero, shared across hero variants.
export default function MainSections() {
  return (
    <>
      <TechStrip />
      <Stats />
      <Portfolio />
      <Capabilities />
      <ShowcaseMorph />
      <About />
      <Journey />
      <Testimonials />
      <Contact />
    </>
  );
}
