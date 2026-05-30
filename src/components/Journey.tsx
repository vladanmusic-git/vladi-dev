"use client";

import { Music, Smartphone, Terminal, Plug, Phone, Network } from "lucide-react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "./ui/radial-orbital-timeline";
import AnimateIn from "./AnimateIn";

const journeyData: TimelineItem[] = [
  {
    id: 1,
    title: "Music",
    date: "2010",
    content:
      "Award-winning jazz pianist and film composer. Full-scholarship Master's in Munich, performed at Carnegie Hall, scored a film that won three LA Film Awards.",
    category: "Origin",
    icon: Music,
    relatedIds: [2],
    status: "completed",
    energy: 65,
  },
  {
    id: 2,
    title: "First AI app",
    date: "2023",
    content:
      "Shipped a multi-tenant consumer AI app to the App Store and Google Play with an AI chat assistant, subscriptions, and a hardened Supabase backend.",
    category: "Product",
    icon: Smartphone,
    relatedIds: [1, 3],
    status: "completed",
    energy: 85,
  },
  {
    id: 3,
    title: "Agent toolchain",
    date: "2024",
    content:
      "Built 100+ reusable Claude Code and Codex skills, slash commands, lifecycle hooks, and custom subagents, with cross-model adversarial review before every ship.",
    category: "Tooling",
    icon: Terminal,
    relatedIds: [2, 4],
    status: "completed",
    energy: 100,
  },
  {
    id: 4,
    title: "MCP servers",
    date: "2024",
    content:
      "Multiple Model Context Protocol servers on the official SDK, including a Dockerized read-only connector secured with OAuth2 PKCE and JWT.",
    category: "Tooling",
    icon: Plug,
    relatedIds: [3, 5],
    status: "completed",
    energy: 95,
  },
  {
    id: 5,
    title: "Voice agents",
    date: "2024",
    content:
      "Production conversational phone agents with neural TTS, low-latency speech to text, live tool calling for booking and lead capture, and a daily-spend kill switch.",
    category: "Voice",
    icon: Phone,
    relatedIds: [4, 6],
    status: "completed",
    energy: 90,
  },
  {
    id: 6,
    title: "Agentic platform",
    date: "2025",
    content:
      "A multi-tenant agentic LLM platform with sub-agent orchestration, cost-aware model routing, prompt caching, and RAG over encrypted knowledge graphs.",
    category: "Platform",
    icon: Network,
    relatedIds: [5],
    status: "in-progress",
    energy: 80,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn variant="fadeIn">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
            The path here
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
            From concert halls to production AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            A connected map of the build. Tap any node to open it.
          </p>
        </AnimateIn>
      </div>
      <div className="mt-6">
        <RadialOrbitalTimeline timelineData={journeyData} />
      </div>
    </section>
  );
}
