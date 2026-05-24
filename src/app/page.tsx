import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import About from "@/components/About";
import Platforms from "@/components/Platforms";
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
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <About />
        <Platforms />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
