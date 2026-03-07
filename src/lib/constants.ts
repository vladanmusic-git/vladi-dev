export const SITE = {
  name: "Vladi Mijatovic",
  title: "Vladi Mijatovic | Full-Stack Developer and AI Integration Specialist",
  description:
    "I build complete mobile apps, websites, and AI systems from scratch. React Native, Next.js, TypeScript, Claude API, OpenAI. Based in Los Angeles.",
  url: "https://vladi-dev.vercel.app",
  email: "vladanmijatovic@me.com",
};

export const LINKS = {
  upwork: "https://www.upwork.com/freelancers/~01fe02d985743fdef0",
  fiverr: "https://www.fiverr.com/vladi_jobs",
  linkedin: "https://www.linkedin.com/in/vladi-jobs-1ba27b3b5",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.svetbrojeva.app",
};

export const HERO = {
  headline: "I Build Apps, Websites, and AI Systems from Scratch",
  subtext:
    "Senior full-stack developer based in Los Angeles. I take your idea from the first wireframe to a live product on the App Store and Google Play.",
  cta1: "View My Work",
  cta2: "Get in Touch",
};

export const SERVICES = [
  {
    title: "Mobile Apps",
    description:
      "Complete iOS and Android apps built with React Native. From UI design to App Store submission. Payments, subscriptions, push notifications, and database included.",
    tech: ["React Native", "Expo", "TypeScript", "RevenueCat"],
    icon: "smartphone" as const,
  },
  {
    title: "Websites and Landing Pages",
    description:
      "Fast, modern websites deployed on Vercel or Netlify. From simple landing pages to full web apps with user accounts, databases, and payment processing.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    icon: "globe" as const,
  },
  {
    title: "AI Features and Assistants",
    description:
      "Smart chatbots, content generation, AI search, and automated workflows. I integrate Claude, ChatGPT, Gemini, and any LLM API into your existing app or website.",
    tech: ["Claude API", "OpenAI", "Gemini", "n8n"],
    icon: "sparkles" as const,
  },
];

export const PORTFOLIO = {
  hero: {
    title: "Svet Brojeva",
    subtitle: "Production Mobile App, Live on Google Play",
    stats: [
      "248,000+ Words",
      "AI Chat Assistant",
      "3 Subscription Tiers",
      "Built 100% Solo",
    ],
    description:
      "A production mobile app with over 248,000 words of original content. Features an AI-powered conversational assistant using Claude API, 3-tier subscription system via RevenueCat, dynamic PDF report generation, and token-based usage tracking. Built entirely solo from architecture to deployment.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Claude API",
      "RevenueCat",
    ],
  },
  secondary: [
    {
      title: "AI Chat System with Token Management",
      description:
        "Complete AI chat infrastructure connecting to Claude API (Opus, Sonnet, Haiku) with intelligent model selection. Custom token tracking per user, daily and monthly limits by subscription tier, real-time streaming, and admin monitoring tools.",
      tech: ["TypeScript", "Claude API", "Supabase", "Node.js"],
    },
    {
      title: "Subscription Monetization System",
      description:
        "3-tier subscription system (Free, Premium, VIP) with RevenueCat and Stripe. Handles Apple App Store and Google Play in-app purchases, real-time entitlement syncing, custom paywall UI, and webhook-based lifecycle management.",
      tech: ["Stripe", "RevenueCat", "React Native", "Supabase"],
    },
  ],
};

export const ABOUT = {
  story: [
    "Before I wrote my first line of code, I spent 15 years composing music for Hollywood films, performing at Carnegie Hall, and graduating from Berklee College of Music and the University of Music and Performing Arts in Munich.",
    "That creative career gave me something most developers lack: an obsessive attention to detail, deep intuition for how people experience products, and the discipline to manage complex projects solo from start to finish.",
    "Today I combine that creative foundation with serious engineering skills. I build production software that real people use and pay for. The same precision I brought to film scores is what I bring to every line of code.",
  ],
  education: [
    { school: "Berklee College of Music", degree: "BM, 2010" },
    {
      school: "University of Music and Performing Arts Munich",
      degree: "MA, 2012",
    },
  ],
};

export const STATS = [
  { value: "248,000+", label: "Words of Production Content" },
  { value: "1", label: "Complete App, Live on Google Play" },
  { value: "3", label: "AI APIs Integrated" },
  { value: "100%", label: "Solo Built, Start to Finish" },
];

export const GALLERY = [
  {
    src: "/images/portfolio/ai-assistant-voice.jpg",
    title: "AI Assistant App",
    category: "AI",
  },
  {
    src: "/images/portfolio/shield-safety-app.jpg",
    title: "Safety Alert System",
    category: "Apps + AI",
  },
  {
    src: "/images/portfolio/real-estate-app.jpg",
    title: "Real Estate App",
    category: "Mobile Apps",
  },
  {
    src: "/images/portfolio/ai-notes-gpt.jpg",
    title: "AI Notes with GPT",
    category: "AI",
  },
  {
    src: "/images/portfolio/finance-dashboard.jpg",
    title: "Finance Dashboard",
    category: "Mobile Apps",
  },
  {
    src: "/images/portfolio/agropulse-ai-farm.jpg",
    title: "AgroPulse Farm AI",
    category: "Apps + AI",
  },
  {
    src: "/images/portfolio/healthcare-app.jpg",
    title: "Healthcare Booking",
    category: "Mobile Apps",
  },
  {
    src: "/images/portfolio/premium-ai-monetization.jpg",
    title: "Premium AI Monetization",
    category: "Apps + AI",
  },
];

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
