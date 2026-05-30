import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainSections from "@/components/MainSections";
import Footer from "@/components/Footer";
import VariantSwitcher from "@/components/VariantSwitcher";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainSections />
      </main>
      <Footer />
      <VariantSwitcher current="/" />
    </>
  );
}
