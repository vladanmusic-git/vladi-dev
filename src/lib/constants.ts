// The role is one word set in one place, so the page, the share card, the
// structured data and the footer can never disagree with each other.
// It matches the public Upwork profile title (read logged out 2026-11-12).
const ROLE = "AI Developer";

export const SITE = {
  name: "Vladi Mijatovic",
  role: ROLE,
  title: `Vladi Mijatovic, ${ROLE}: AI Agents, Claude & OpenAI API, React Native & Expo`,
  description:
    "I design, build and fix AI products end to end: AI agents, Claude and OpenAI API integrations, MCP servers, automations and voice agents, plus the React Native and Expo apps they run in.",
  url: "https://vladii.com",
  location: "Remote, US hours",
};

// Upwork is the only way to reach Vladi from this site (S0, 2026-11-12).
export const LINKS = {
  upwork: "https://www.upwork.com/freelancers/~01fe02d985743fdef0",
};

export const HERO = {
  badge: ROLE,
  headline: "Vladi Mijatovic",
  roles: [
    "AI Agents",
    "Claude and OpenAI API",
    "Custom MCP Servers",
    "AI Voice Agents",
    "React Native and Expo",
  ],
  subtext:
    "I design, build and fix AI products end to end: AI agents, Claude and OpenAI API integrations, MCP servers and automations, plus the React Native and Expo apps they run in.",
  cta1: "View work",
  cta2: "Hire me on Upwork",
};

// Capabilities mirror the CV competency set, AI toolchain first.
export const CAPABILITIES = [
  {
    title: "Agentic LLM Systems",
    description:
      "Tool-calling agent loops, parallel sub-agent orchestration, per-tenant isolated state, and RAG over encrypted knowledge graphs.",
    tech: ["Agent loops", "Sub-agents", "RAG", "Knowledge graphs"],
    icon: "brain" as const,
  },
  {
    title: "Claude Code and Codex Tooling",
    description:
      "A library of reusable skills, slash commands, lifecycle hooks, and custom subagents, with cross-model adversarial code review before every ship.",
    tech: ["Claude Code", "Codex CLI", "Lifecycle hooks", "Subagents"],
    icon: "terminal" as const,
  },
  {
    title: "Custom MCP Servers",
    description:
      "Model Context Protocol servers on the official SDK, including a Dockerized read-only connector secured with OAuth2 PKCE and JWT.",
    tech: ["MCP SDK", "Hono", "OAuth2 PKCE", "Docker"],
    icon: "plug" as const,
  },
  {
    title: "AI Voice Agents",
    description:
      "Production conversational phone agents with neural TTS, low-latency speech to text, and live tool calling for booking, lead capture, and warm transfer.",
    tech: ["Retell AI", "ElevenLabs", "Deepgram", "Telnyx and Twilio"],
    icon: "phone" as const,
  },
  {
    title: "Full-Stack TypeScript",
    description:
      "Next.js and React apps on Supabase and Postgres with row-level security, edge functions, realtime, idempotent webhooks, and rate limiting.",
    tech: ["TypeScript", "Next.js", "Supabase", "Postgres RLS"],
    icon: "layers" as const,
  },
  {
    title: "Payments and Monetization",
    description:
      "Stripe checkout and subscriptions, RevenueCat, native in-app purchases, server-side receipt verification, and idempotent entitlement webhooks.",
    tech: ["Stripe", "RevenueCat", "In-app purchases", "Webhooks"],
    icon: "creditCard" as const,
  },
];

// Projects mirror the CV, in CV order, generic (never names private products).
export const PROJECTS = [
  {
    title: "Custom AI Agent Toolchain",
    tagline: "Claude Code · Codex · MCP",
    badge: "Toolchain",
    description:
      "Reusable Claude Code and Codex CLI skills and custom slash commands, plus multiple Model Context Protocol servers on the official SDK. Includes a Dockerized read-only connector secured with OAuth2 PKCE and JWT, and lifecycle hooks for secret-leak prevention, sacred-path edit guards, and git safety.",
    tech: [
      "Model Context Protocol",
      "@modelcontextprotocol/sdk",
      "Hono",
      "OAuth2 PKCE",
      "JWT",
      "Docker",
      "Bun",
      "Python",
    ],
    icon: "terminal" as const,
    featured: true,
  },
  {
    title: "Multi-Tenant Agentic Bot Fleet",
    tagline: "Self-Hosted · Past project",
    badge: "Past project",
    description:
      "An agentic LLM platform I built and ran in production, with a tool-calling agent loop, parallel sub-agent orchestration, per-tenant isolated state, cost-aware multi-model routing with circuit breakers, prompt caching, and RAG over an encrypted per-tenant knowledge graph. It ran one isolated server per tenant with tiered watchdogs and synthetic liveness probes. Now retired.",
    tech: [
      "TypeScript",
      "Bun",
      "Anthropic SDK",
      "Groq fallback",
      "AES-256-GCM",
      "pgvector",
      "Hetzner Cloud",
      "systemd",
      "Sentry",
    ],
    icon: "network" as const,
    featured: false,
  },
  {
    title: "AI Voice Phone Agent",
    tagline: "Voice · Built",
    badge: "Built",
    description:
      "A conversational AI receptionist I built for inbound business calls on a carrier phone line, with LLM-driven booking, lead capture, and human escalation. Built in two languages, plus a from-scratch streaming voice agent over a WebSocket media relay with token streaming and mid-utterance barge-in, a daily-spend kill switch, and a multi-tenant call-analytics pipeline with idempotent webhook upserts.",
    tech: [
      "Retell AI",
      "Custom-LLM WebSocket",
      "ElevenLabs",
      "Deepgram",
      "Telnyx",
      "Twilio",
      "Cal.com API",
      "Supabase",
      "Postgres RLS",
    ],
    icon: "phone" as const,
    featured: false,
  },
  {
    title: "Multi-Tenant Consumer AI App",
    tagline: "Android · Live",
    badge: "Live on Google Play",
    description:
      "Live on Google Play with an AI chat assistant, structured AI report generation across multiple product types, automatic PDF export, multi-language content, three subscription tiers, and a Supabase backend hardened with row-level security.",
    tech: [
      "React Native",
      "Expo SDK 54",
      "React 19",
      "Supabase",
      "Postgres RLS",
      "RevenueCat",
      "Stripe",
      "Anthropic Claude API",
      "EAS Build",
    ],
    icon: "smartphone" as const,
    featured: false,
  },
];

export const TECH = [
  "Anthropic",
  "OpenAI",
  "Model Context Protocol",
  "TypeScript",
  "Next.js",
  "React",
  "Supabase",
  "Docker",
  "PostgreSQL",
  "Stripe",
  "Bun",
  "Retell",
  "ElevenLabs",
];

export const ABOUT = {
  heading: "From concert halls to production AI",
  story: [
    "I build the AI toolchain, not just use it. My work is agentic systems: multi-tenant LLM platforms, a library of Claude Code and Codex skills and slash commands, custom MCP servers on the official SDK, and conversational voice agents built for real phone calls.",
    "I ship end to end. That means the agent loop and the cost-aware model routing, but also the billing, the row-level security, the webhooks, the uptime watchdogs, and the App Store compliance. One person, the whole stack, in production.",
    "Before software, I spent a career in music. Award-winning jazz pianist and film composer, full-scholarship Master's and Bachelor's in Jazz Piano and Composition, and performed at Carnegie Hall. I scored the film The Companion, winner of three Los Angeles Film Awards in 2024.",
    "Decades of performing under deadline built the discipline and obsessive attention to detail that now go into every system I ship.",
  ],
  credentials: [
    { label: "Carnegie Hall", sub: "Performed", icon: "hall" as const },
    { label: "3 LA Film Awards, 2024", sub: "Scored The Companion", icon: "film" as const },
  ],
};

export const NAV_ITEMS = [
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/#about" },
];
