import Header from "@/components/Header";
import HeroGalaxy from "@/components/heroes/HeroGalaxy";
import MainSections from "@/components/MainSections";
import Footer from "@/components/Footer";
import { SITE, LINKS } from "@/lib/constants";

// Person structured data lives here, on the portfolio homepage only, so
// /studio and other routes do not inherit the biography fields.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vladi Mijatovic",
  url: SITE.url,
  image: `${SITE.url}/opengraph-image`,
  jobTitle: "Senior AI Engineer",
  email: `mailto:${SITE.email}`,
  description: SITE.description,
  sameAs: [LINKS.linkedin],
  knowsAbout: [
    "Agentic LLM Systems",
    "Claude Code",
    "Codex",
    "Model Context Protocol",
    "MCP servers",
    "AI voice agents",
    "Prompt caching",
    "RAG",
    "TypeScript",
    "Next.js",
    "Supabase",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Music and Performing Arts Munich",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main>
        <HeroGalaxy />
        <MainSections />
      </main>
      <Footer />
    </>
  );
}
