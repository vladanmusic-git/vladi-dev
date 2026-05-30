import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStrip />
        <Stats />
        <Portfolio />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
