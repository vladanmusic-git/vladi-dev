import Header from "@/components/Header";
import HeroGalaxy from "@/components/heroes/HeroGalaxy";
import MainSections from "@/components/MainSections";
import Footer from "@/components/Footer";
import VariantSwitcher from "@/components/VariantSwitcher";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroGalaxy />
        <MainSections />
      </main>
      <Footer />
      <VariantSwitcher current="/" />
    </>
  );
}
