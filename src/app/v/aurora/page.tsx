import Header from "@/components/Header";
import HeroFloatingIcons from "@/components/heroes/HeroFloatingIcons";
import MainSections from "@/components/MainSections";
import Footer from "@/components/Footer";
import VariantSwitcher from "@/components/VariantSwitcher";

export const metadata = { robots: { index: false } };

export default function AuroraVariant() {
  return (
    <>
      <Header />
      <main>
        <HeroFloatingIcons />
        <MainSections />
      </main>
      <Footer />
      <VariantSwitcher current="/v/aurora" />
    </>
  );
}
