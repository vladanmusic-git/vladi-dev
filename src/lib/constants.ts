export const SITE = {
  name: "Vladi Mijatovic",
  title: "Vladi Mijatovic | Claude Code Developer, AI Apps, Websites",
  description:
    "Claude Code developer based in Los Angeles. I build complete mobile apps, websites, and AI systems 3-5x faster. React Native, Next.js, TypeScript, Claude API, OpenAI.",
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
  headline: "The Claude Code Developer",
  subtext:
    "I build complete apps, websites, and AI systems 3-5x faster using Claude Code. But I go beyond code. I research your market, design your brand, optimize your SEO, and deliver a polished product from the first wireframe to the App Store.",
  roles: [
    "Mobile App Developer",
    "AI Integration Specialist",
    "Full-Stack Engineer",
    "Product Designer & Strategist",
    "Claude Code Expert",
  ],
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
    title: "AI Integration",
    description:
      "I integrate any AI into your app or website. Claude, ChatGPT, Gemini, Grok, or any other LLM API. Smart chatbots, content generation, AI search, image recognition, and voice assistants.",
    tech: ["Claude API", "OpenAI", "Gemini", "Grok"],
    icon: "sparkles" as const,
  },
  {
    title: "Automation and Workflows",
    description:
      "Custom Claude Code agents, MCP server integrations, n8n workflow automation, and AI-powered pipelines. I build the tools that make your development team faster and your business more efficient.",
    tech: ["n8n", "Claude Code", "Agent SDK", "MCP"],
    icon: "terminal" as const,
  },
  {
    title: "Design and Brand Identity",
    description:
      "Custom visual identity, app icons, fonts, color systems, UI/UX design, and creative assets. I give your product a distinctive look and a stronger brand presence that stands out.",
    tech: ["UI/UX Design", "Figma", "Brand Identity", "Custom Assets"],
    icon: "palette" as const,
  },
  {
    title: "SEO, Marketing and Ads",
    description:
      "SEO optimization, market research, ad campaigns, positioning strategy, content marketing, and App Store Optimization. I help your product get found and grow.",
    tech: ["SEO", "Google Ads", "ASO", "Content Strategy"],
    icon: "megaphone" as const,
  },
];

export const PROJECTS = [
  {
    title: "Svet Brojeva",
    subtitle: "Production Mobile App, Live on Google Play",
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
    category: "Mobile App",
    image: "/images/portfolio/ai-sara-chatbot.png",
    featured: true,
    stats: [
      "248,000+ Words",
      "AI Chat Assistant",
      "3 Subscription Tiers",
      "Built 100% Solo",
    ],
  },
  {
    title: "AI Voice Assistant",
    subtitle: "Speech-to-Text Mobile App",
    description:
      "An AI-powered voice assistant app with speech-to-text, natural language processing, and intelligent responses. Built with React Native and integrated with Claude API for natural conversation flow. Published on both the App Store and Google Play.",
    tech: ["React Native", "Claude API", "Speech-to-Text", "TypeScript"],
    category: "Mobile App",
    image: "/images/portfolio/ai-assistant-voice.jpg",
    featured: false,
  },
  {
    title: "Finance Dashboard",
    subtitle: "Real-Time Analytics Platform",
    description:
      "A real-time financial analytics dashboard with interactive charts, portfolio tracking, and automated reporting. Built with Next.js and Supabase for a fast, responsive experience. Deployed on Vercel with serverless API routes.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    category: "Web App",
    image: "/images/portfolio/finance-dashboard.jpg",
    featured: false,
  },
  {
    title: "Healthcare Booking System",
    subtitle: "Patient Management Platform",
    description:
      "A full-stack healthcare appointment booking platform with patient management, provider scheduling, and automated reminders. React Native mobile app paired with a Next.js admin panel and PostgreSQL backend.",
    tech: ["React Native", "Next.js", "PostgreSQL", "Node.js"],
    category: "Mobile App",
    image: "/images/portfolio/healthcare-app.jpg",
    featured: false,
  },
  {
    title: "AgroPulse Farm AI",
    subtitle: "Agricultural Intelligence System",
    description:
      "An AI-powered agricultural monitoring system with crop analysis, weather integration, and yield prediction. Uses Gemini API for image recognition and Claude for actionable recommendations delivered to mobile and web.",
    tech: ["React Native", "Gemini API", "Claude API", "Supabase"],
    category: "AI System",
    image: "/images/portfolio/agropulse-ai-farm.jpg",
    featured: false,
  },
  {
    title: "Shield Safety Alert",
    subtitle: "Personal Safety App",
    description:
      "A personal safety app with real-time location sharing, emergency alerts, and automated incident reporting. Push notifications, background location tracking, and integration with emergency services APIs.",
    tech: ["React Native", "Expo", "Firebase", "Push Notifications"],
    category: "Mobile App",
    image: "/images/portfolio/shield-safety-app.jpg",
    featured: false,
  },
  {
    title: "Real Estate Platform",
    subtitle: "Property Listing App",
    description:
      "A property listing and management platform with map integration, virtual tours, and mortgage calculators. Built for both buyers and agents with role-based access and real-time messaging.",
    tech: ["React Native", "Supabase", "Maps API", "TypeScript"],
    category: "Mobile App",
    image: "/images/portfolio/real-estate-app.jpg",
    featured: false,
  },
  {
    title: "AI Notes with GPT",
    subtitle: "Smart Note-Taking App",
    description:
      "An intelligent note-taking app that uses GPT to summarize, organize, and search notes using natural language. Auto-tagging, smart search, and AI-generated action items from meeting notes.",
    tech: ["React Native", "OpenAI API", "Supabase", "TypeScript"],
    category: "AI System",
    image: "/images/portfolio/ai-notes-gpt.jpg",
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Delivered the complete app in half the time I expected. The AI chat feature works perfectly and my users love it. Would hire again without hesitation.",
    author: "S.R.",
    role: "Startup Founder",
    project: "Mobile App",
  },
  {
    quote:
      "Vladi handled everything from the database design to the App Store submission. I didn't have to manage multiple contractors. One person, one project, done right.",
    author: "M.K.",
    role: "Business Owner",
    project: "Full-Stack App",
  },
  {
    quote:
      "The subscription system is generating real revenue from day one. He set up payments, handled all the App Store compliance, and made sure everything worked before launch.",
    author: "T.L.",
    role: "Product Manager",
    project: "SaaS Platform",
  },
  {
    quote:
      "I needed AI features added to my existing website. Vladi integrated Claude and built a custom chatbot that actually understands our product. Users find answers faster now.",
    author: "A.D.",
    role: "Marketing Director",
    project: "AI Integration",
  },
  {
    quote:
      "Fast, clear communication, and the quality was better than what my previous agency delivered at 3x the cost. The code is clean and well documented.",
    author: "J.P.",
    role: "CTO",
    project: "Web Application",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We talk about your idea, goals, timeline, and budget. Free, no commitment.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "I map out the tech stack, database, screens, and milestones. You approve before any code is written.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "I build in short sprints and send you working demos every few days. You see progress, not excuses.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "I handle testing, app store submission, hosting setup, and go-live. Plus 30 days of free bug fixes.",
  },
];

export const ABOUT = {
  story: [
    "Before I wrote my first line of code, I spent 15 years composing music for Hollywood films, performing at Carnegie Hall, and graduating from Berklee College of Music and the University of Music and Performing Arts in Munich.",
    "That creative career gave me something most developers lack: an obsessive attention to detail, deep intuition for how people experience products, and the discipline to manage complex projects solo from start to finish.",
    "I do not believe in throwing together random apps just to deliver something fast. I approach every project with care, deep research, and real strategic thinking. I look for what makes your idea different, how it can stand out in the market, and how to shape it into something people actually want.",
    "My work goes beyond coding. I think about SEO, positioning, visual identity, and the details that make a product feel polished and professional. That includes custom images, icons, fonts, and creative assets that give your app a distinctive look and stronger brand presence.",
    "The most important thing you should know about me is simple: I care. I care about the product, the details, and delivering work that is thoughtful, high quality, and built to make a real impact.",
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
  { value: "10+", label: "Apps on App Store and Google Play" },
  { value: "248K+", label: "Words of Production Content" },
  { value: "3-5x", label: "Faster with Claude Code" },
  { value: "100%", label: "Solo Built, End to End" },
];

export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
