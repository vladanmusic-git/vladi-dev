import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE, LINKS } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "Senior AI Engineer",
    "Agentic LLM Systems",
    "Claude Code",
    "Codex",
    "MCP servers",
    "Model Context Protocol",
    "AI voice agents",
    "Next.js",
    "TypeScript",
    "Vladi Mijatovic",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
