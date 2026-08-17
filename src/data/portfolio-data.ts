export const personalInfo = {
  name: "Maryam Mumtaz",
  title: "AI Engineer & Full-Stack Developer",
  tagline: "AI Engineer & Full-Stack Developer | Founder, Marsa Empower",
  location: "Karachi, Sindh, Pakistan",
  email: "maryamqureshimumtazm.a@gmail.com",
  status: "Available for Hire",
  portfolio: "https://maryam-mumtaz.vercel.app/",
  resume: "https://maryam-resume.vercel.app/",
  linkedin: "https://www.linkedin.com/in/maryam-mumtaz",
  github: "https://github.com/MaryamMumtaz-piaic",
  bio: "I build intelligent AI agents, autonomous workflows, scalable full-stack platforms, and AI-powered automation systems. Founder of Marsa Empower, working across agentic AI, MCP, RAG, and cloud-native engineering.",
  summary:
    "I'm Maryam Mumtaz, an AI Engineer and Full-Stack Developer from Karachi, Pakistan, and the founder of Marsa Empower. I design and ship agentic AI systems, multi-agent architectures, and AI-powered automation — combining Python and FastAPI on the backend with Next.js and TypeScript on the frontend, and connecting it all through MCP, RAG, and workflow automation with n8n.",
  availability:
    "Always open to full-time opportunities, freelance projects, consulting, and strategic partnerships.",
  motto: "Engineering intelligence into every system, one line of code at a time.",
};

export const coreFocusAreas = [
  {
    title: "Agentic & Multi-Agent AI",
    description:
      "Autonomous agents and coordinated multi-agent systems that plan, decide, and execute.",
    icon: "robot",
  },
  {
    title: "Full-Stack Development",
    description:
      "Scalable web platforms, responsive frontends, and robust APIs.",
    icon: "code",
  },
  {
    title: "AI Automation & Integration",
    description:
      "Workflow automation across code and no-code, powered by MCP, RAG, and n8n.",
    icon: "automation",
  },
];

export const experience = [
  {
    company: "Marsa Empower",
    role: "Founder",
    period: "January 2026 - Present",
    location: "Karachi, Pakistan",
    description:
      "Founded Marsa Empower to build a digital platform that empowers individuals, ideas, and communities through AI-driven content and engagement.",
    responsibilities: [
      "Vision and strategic direction",
      "Platform development and digital presence",
      "Brand building and positioning",
      "Community growth and engagement",
      "Long-term innovation and expansion strategy",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "January 2025 - Present",
    location: "Self-employed",
    description:
      "Delivering custom web applications, AI agents, and automation workflows for clients.",
    responsibilities: [
      "Building web applications with Next.js & React",
      "Developing AI-powered automation workflows",
      "Client consultation and project scoping",
      "End-to-end development from design to deployment",
    ],
  },
  {
    company: "Self-employed",
    role: "Web Developer & Graphic Designer",
    period: "April 2025 - Present",
    location: "Karachi",
    description:
      "Building web experiences and visual identities for businesses and individuals.",
    responsibilities: [
      "Responsive website development",
      "UI/UX design with Figma & Canva",
      "Brand identity and logo design",
      "Graphic design for digital marketing",
    ],
  },
];

export const education = [
  {
    institution: "PIAIC",
    degree: "Agentic & Robotic AI Engineer",
    period: "April 2025 - Present",
    status: "In Process",
  },
  {
    institution: "Govt. of Sindh VTC Jacobline Saddar Karachi",
    degree: "DIT — Diploma in Information Technology",
    period: "February 2023 - September 2024",
    status: "Completed",
  },
  {
    institution: "Govt. Degree College for Women",
    degree: "Intermediate — Engineering",
    period: "April 2021 - November 2023",
    status: "Completed",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "March 2026",
    credentialId: "vnisr68f3767",
    verifyUrl: "https://verify.skilljar.com/c/vnisr68f3767",
  },
  {
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    issued: "March 2026",
    credentialId: "3atanznvm4zr",
    verifyUrl: "https://verify.skilljar.com/c/3atanznvm4zr",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issued: "March 2026",
    credentialId: "scyu7pokq3nq",
    verifyUrl: "https://verify.skilljar.com/c/scyu7pokq3nq",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    issued: "April 2026",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    issued: "April 2026",
  },
  {
    name: "Graphic Designer",
    issuer: "JDC Free IT City",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
  category: string;
  highlights: string[];
};

const AGENTS_REPO = "https://github.com/MaryamMumtaz-piaic/30DaysOfAI-Agents/tree/main";

export const projects: Project[] = [
  {
    slug: "ai-command-control-center",
    title: "AI Command & Control Center",
    description:
      "Unified command center that deploys, monitors, and chains 29 AI agents from a single dashboard, with live execution logs and per-agent cost tracking.",
    tech: ["Python", "LangGraph", "CrewAI", "FastAPI", "WebSockets", "PostgreSQL", "Redis", "Docker"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-30-ai-command-control-center`,
    live: "",
    image: "/Day 30.png",
    featured: true,
    category: "Agentic AI",
    highlights: [
      "Single dashboard controlling and monitoring all 29 prior agents",
      "Real-time agent health monitoring with live execution logs",
      "On-the-fly agent chaining and dynamic pipeline creation",
      "Resource usage and API cost tracking per agent and user",
      "Master REST API gateway with role-based access control",
    ],
  },
  {
    slug: "ai-agents-portfolio",
    title: "AI Agents Portfolio — 100+ Agents",
    description:
      "An ongoing agent engineering practice of 100+ completed AI agents, spanning single intelligent agents, multi-agent crews, and enterprise AI platforms.",
    tech: ["Python", "OpenAI SDK", "LangChain", "LangGraph", "CrewAI", "MCP", "FastAPI"],
    github: "https://github.com/MaryamMumtaz-piaic/30DaysOfAI-Agents",
    live: "",
    image: "/ai-developer.PNG",
    featured: true,
    category: "Agentic AI",
    highlights: [
      "100+ AI agents completed across research, automation, and analysis domains",
      "Phase 1 — intelligent single agents for research, debugging, and triage",
      "Phase 2 — multi-agent crews coordinating specialists in parallel and in sequence",
      "Phase 3 — enterprise platforms with RAG, billing, and multi-tenancy",
      "Standardized FastAPI + Tailwind delivery pattern across the collection",
    ],
  },
  {
    slug: "enterprise-workflow-automation",
    title: "Enterprise AI Workflow Automation",
    description:
      "AI-native visual workflow builder for composing agent pipelines from 20+ node types with conditional logic, webhook and cron triggers, and one-click deploy.",
    tech: ["Python", "LangGraph", "CrewAI", "FastAPI", "Canvas API", "PostgreSQL", "Redis", "Docker"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-26-enterprise-workflow-automation`,
    live: "",
    image: "/Day 26.png",
    featured: true,
    category: "Enterprise AI",
    highlights: [
      "Visual node-based workflow builder using the Canvas API",
      "20+ pre-built agent node types (researcher, writer, coder, analyzer)",
      "Conditional branching and loop logic inside workflows",
      "Webhook, cron, and event-based trigger system",
      "Community marketplace for sharing pre-built workflows",
    ],
  },
  {
    slug: "ai-saas-platform",
    title: "Full AI SaaS Platform",
    description:
      "Production AI SaaS with OAuth authentication, three Stripe-billed subscription tiers, and ten specialized AI tools gated by plan.",
    tech: ["Python", "OpenAI SDK", "LangChain", "FastAPI", "PostgreSQL", "Stripe", "OAuth2", "Docker"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-29-ai-saas-platform`,
    live: "",
    image: "/Day 29.png",
    featured: true,
    category: "AI SaaS",
    highlights: [
      "Full auth system with Google and GitHub OAuth",
      "Three-tier subscriptions with Stripe billing and webhook handling",
      "Ten AI tools including writer, code reviewer, and SEO analyzer",
      "Admin panel with user management and revenue analytics",
      "Token usage tracking and per-user quota enforcement",
    ],
  },
  {
    slug: "multi-tenant-rag-platform",
    title: "Multi-Tenant RAG Platform",
    description:
      "Enterprise RAG system where each tenant gets an isolated knowledge store and branded assistant, with LLM fallback that writes answers back into the tenant's memory.",
    tech: ["Python", "LangChain", "Chroma DB", "FastAPI", "PostgreSQL", "JWT", "Docker"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-21-multi-tenant-rag-platform`,
    live: "",
    image: "/Day 21.PNG",
    featured: true,
    category: "RAG",
    highlights: [
      "Multi-tenant architecture with complete per-tenant data isolation",
      "RAG-first routing with LLM fallback and automatic knowledge-base growth",
      "Per-tenant custom AI personas and system prompts",
      "Live analytics on answer source, retrieval score, and citations",
      "Tenant isolation verified on every query",
    ],
  },
  {
    slug: "ai-powered-crm-sales-intelligence",
    title: "AI-Powered CRM with Sales Intelligence",
    description:
      "Sales intelligence CRM with AI lead scoring, deal win-probability prediction, call transcription, follow-up generation, and pipeline-aware chat assistance.",
    tech: ["Python", "FastAPI", "OpenAI GPT-4o", "Whisper", "SQLite", "Chart.js", "JavaScript"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-22-ai-powered-crm`,
    live: "",
    image: "/Day 22.png",
    featured: true,
    category: "Enterprise AI",
    highlights: [
      "AI lead scoring from 0–100 with behavior analysis",
      "Deal win-probability prediction with confidence and risk factors",
      "Call transcription using Whisper with GPT-4o insight extraction",
      "Personalized follow-up email generation with tone control",
      "CRM pipeline chat assistant with lead, contact, and deal context",
    ],
  },
  {
    slug: "realtime-ai-trading-dashboard",
    title: "Real-Time AI Trading Intelligence Dashboard",
    description:
      "Trading intelligence dashboard with four AI analysis agents, live quote refreshes, WebSocket price streams, paper trading, alerts, and strategy backtesting.",
    tech: ["Python", "FastAPI", "OpenAI SDK", "yfinance", "WebSockets", "SQLite", "Chart.js"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-23-realtime-ai-trading-dashboard`,
    live: "",
    image: "/Day 23.png",
    featured: true,
    category: "Enterprise AI",
    highlights: [
      "Four-agent analysis system for technical, fundamental, sentiment, and synthesis workflows",
      "Live market data for equities and crypto with yfinance refreshes",
      "WebSocket price stream with candlestick charts and trading levels",
      "Paper trading portfolio with realized and unrealized P&L tracking",
      "Five-year strategy backtesting with AI commentary",
    ],
  },
  {
    slug: "autonomous-brand-manager",
    title: "Autonomous AI Brand Manager",
    description:
      "Autonomous brand management platform with six AI agents for social inbox triage, reply writing, content strategy, A/B variants, competitive intelligence, and brand health reporting.",
    tech: ["Python", "FastAPI", "OpenAI GPT-4o", "WebSockets", "SQLite", "Tailwind CSS", "Chart.js"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-24-autonomous-brand-manager`,
    live: "",
    image: "/Day 24.png",
    featured: true,
    category: "Enterprise AI",
    highlights: [
      "Six-agent brand management system named Aurelia",
      "Unified inbox for Twitter, Instagram, and LinkedIn activity",
      "Confidence-gated auto-replies with escalation for sensitive issues",
      "Editable brand voice contract for replies, content, and variants",
      "Weekly brand health reports with risks, mitigations, and next actions",
    ],
  },
  {
    slug: "ai-security-operations-center",
    title: "AI Security Operations Center",
    description:
      "Passive public-domain security scanning platform with evidence-based scoring, AI summaries, tabbed reports, scan history, quotas, and PDF/JSON exports.",
    tech: ["Python", "FastAPI", "OpenAI SDK", "SQLite", "PyJWT", "Tailwind CSS", "ReportLab"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-25-ai-security-operations-center`,
    live: "",
    image: "/Day 25.png",
    featured: true,
    category: "Enterprise AI",
    highlights: [
      "Passive scanning using DNS, RDAP, TLS, HTTP headers, CT logs, Wikidata, and IP geolocation",
      "Evidence-based score deductions from a starting score of 100",
      "Plain-language AI or fallback narratives for summaries and owner fixes",
      "Full report tabs covering findings, infrastructure, registration, attack surface, and MITRE mapping",
      "PDF and JSON report export with user accounts, quotas, and scan history",
    ],
  },
  {
    slug: "ai-learning-management-system",
    title: "AI Learning Management System",
    description:
      "AI LMS that generates course structures from learning materials, creates adaptive quizzes, builds personalized paths, and supports student and instructor dashboards.",
    tech: ["Python", "OpenAI SDK", "LangChain", "FastAPI", "SQLite", "Tailwind CSS", "Chart.js"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-27-ai-learning-management-system`,
    live: "",
    image: "/day 27.png",
    featured: true,
    category: "Enterprise AI",
    highlights: [
      "Generates course structure from uploaded learning materials",
      "Creates module quizzes and adapts difficulty using student performance history",
      "Builds personalized learning paths with a knowledge-graph approach",
      "Provides wrong-answer explanations and concept reinforcement",
      "Includes analytics for completion, time-on-task, and knowledge gaps",
    ],
  },
  {
    slug: "agentic-api-marketplace",
    title: "Agentic AI API Marketplace",
    description:
      "Marketplace for listing, testing, and selling AI agent APIs with REST endpoints, live playgrounds, API keys, rate limits, billing, usage analytics, and seller dashboards.",
    tech: ["Python", "FastAPI", "OpenAI SDK", "PostgreSQL", "Stripe API", "JWT", "Docker"],
    github: `${AGENTS_REPO}/phase-3-enterprise-ai-platforms/day-28-agentic-api-marketplace`,
    live: "",
    image: "/Day 28.png",
    featured: true,
    category: "AI SaaS",
    highlights: [
      "Marketplace for listing and selling AI agent APIs",
      "Sellers expose agents through REST endpoints",
      "Buyers can discover and test agents in a live playground",
      "Authentication, rate limits, billing, and usage analytics",
      "API key management, quota enforcement, seller analytics, and payout dashboard",
    ],
  },
  {
    slug: "autonomous-data-science-pipeline",
    title: "Autonomous Data Science Pipeline",
    description:
      "Six-agent pipeline that takes any CSV and a target column through profiling, cleaning, feature engineering, model selection, and tuning to a finished model card.",
    tech: ["Python", "OpenAI SDK", "Scikit-learn", "Pandas", "FastAPI", "WebSockets", "Chart.js"],
    github: `${AGENTS_REPO}/phase-2-multi-agent-systems/day-15-autonomous-data-science-pipeline`,
    live: "",
    image: "",
    featured: false,
    category: "Multi-Agent",
    highlights: [
      "End-to-end automated ML workflow on any CSV, no code required",
      "Automatic classification vs regression detection from the target",
      "Cross-validated leaderboard across five candidate models",
      "GridSearchCV hyperparameter tuning of the winning model",
      "Model card with held-out metrics and feature importances",
    ],
  },
  {
    slug: "ai-devops-pipeline",
    title: "AI DevOps Review Pipeline",
    description:
      "Multi-agent code review that runs quality, security, coverage, and performance analysts in parallel, then merges their findings into a deployment verdict.",
    tech: ["Python", "OpenAI SDK", "GitHub REST API", "FastAPI", "WebSockets", "Chart.js"],
    github: `${AGENTS_REPO}/phase-2-multi-agent-systems/day-12-ai-devops-pipeline`,
    live: "",
    image: "",
    featured: false,
    category: "Multi-Agent",
    highlights: [
      "Four analyst agents run concurrently via asyncio, merged by a decision agent",
      "Pulls diffs directly from a public GitHub pull request URL",
      "Security findings tagged with CWE and OWASP categories",
      "APPROVE / REQUEST CHANGES / BLOCK verdict with rollback plan",
      "Copy-ready PR comment and full PDF export",
    ],
  },
  {
    slug: "learnflow-ai-platform",
    title: "LearnFlow AI Platform",
    description:
      "Autonomous microservices-based learning platform with persistent memory and struggle detection built on an event-driven architecture.",
    tech: ["Kafka", "Next.js 15", "Goose AI", "Dapr"],
    github: "https://github.com/MaryamMumtaz-piaic",
    live: "https://frontend-rho-seven-ssq2gwtp54.vercel.app/",
    image: "/images/learnflow-app.PNG",
    featured: true,
    category: "Multi-Agent",
    highlights: [
      "Microservices coordinated through Dapr and Kafka events",
      "Persistent learner memory across sessions",
      "Automatic struggle detection to adapt the learning path",
      "Built for Eventon Hackathon III",
    ],
  },
  {
    slug: "physical-ai-textbook",
    title: "Physical AI Textbook",
    description:
      "AI-native textbook platform for Physical AI and Humanoid Robotics, with custom RAG agents and Urdu translation support.",
    tech: ["Docusaurus", "RAG", "Python", "Cloud Native"],
    github: "https://github.com/MaryamMumtaz-piaic",
    live: "https://ai-native-book-iota.vercel.app/",
    image: "/images/physical Ai.png",
    featured: true,
    category: "RAG",
    highlights: [
      "Custom RAG agents answering questions grounded in the textbook",
      "Bilingual content with Urdu translation support",
      "Docusaurus-based content platform deployed cloud-native",
      "Built for Eventon Hackathon I",
    ],
  },
  {
    slug: "ai-spec-driven-todo",
    title: "AI Spec-Driven Todo",
    description:
      "Task management system evolved from a CLI tool into a distributed, Kubernetes-deployed AI agent system using spec-driven development.",
    tech: ["OpenAI", "Next.js", "Dapr", "Kubernetes"],
    github: "https://github.com/MaryamMumtaz-piaic",
    live: "https://todo-app-sigma-hazel-46.vercel.app/",
    image: "/images/Todo-app.png",
    featured: true,
    category: "AI & Agents",
    highlights: [
      "Spec-driven development from CLI through to cloud deployment",
      "Dapr building blocks for service invocation and state",
      "Deployed on Kubernetes",
      "Built for Eventon Hackathon II",
    ],
  },
  {
    slug: "slide-generator-agent",
    title: "SlideGeneratorAgent",
    description:
      "AI web app that converts a single topic into a structured 20–22 slide deck with optional per-slide images, exportable as Markdown or standalone HTML.",
    tech: ["Python", "FastAPI", "OpenAI SDK", "Tailwind CSS", "HTML"],
    github: "https://github.com/MaryamMumtaz-piaic/SlideGeneratorAgent",
    live: "",
    image: "/slide generator agent.PNG",
    featured: true,
    category: "AI Automation",
    highlights: [
      "Topic-to-deck generation targeting 20–22 slides with 3–5 bullets each",
      "Language selection across English, Urdu, and Hindi",
      "Optional per-slide images, remote or downloaded locally",
      "Live preview with slide thumbnails and navigation",
      "One-click export to Markdown and standalone HTML",
    ],
  },
  {
    slug: "social-post-creator-agent",
    title: "SocialPostCreatorAgent",
    description:
      "AI content agent that generates platform-specific social posts for six networks, enforcing each platform's character limits and tone from both a CLI and web UI.",
    tech: ["Python", "OpenAI SDK", "NewsAPI", "CLI", "Web UI"],
    github: "https://github.com/MaryamMumtaz-piaic/SocialPostCreatorAgent",
    live: "",
    image: "",
    featured: false,
    category: "AI Automation",
    highlights: [
      "Six platforms supported: Twitter, Facebook, Instagram, LinkedIn, TikTok, YouTube",
      "Platform-specific formatting, tone adaptation, and character-limit enforcement",
      "Dual interface — rich interactive CLI plus a responsive web UI",
      "Optional topic research via NewsAPI integration",
      "Clipboard copy and markdown file export",
    ],
  },
  {
    slug: "custom-prompt-agent",
    title: "CustomPromptAgent",
    description:
      "Prompt engineering assistant that builds structured prompts from six guided inputs with live preview, reusable templates, and five AI enhancement modes.",
    tech: ["Python", "FastAPI", "OpenAI GPT-4.1", "Gemini 2.0", "Tailwind CSS"],
    github: "https://github.com/MaryamMumtaz-piaic/CustomPromptAgent",
    live: "",
    image: "/cudtom promt agent.png",
    featured: true,
    category: "AI Automation",
    highlights: [
      "Six structured inputs: role, task, tone, format, audience, context",
      "Real-time live preview as the prompt is composed",
      "Five enhancement modes: balanced, technical, creative, strategic, educational",
      "Save, load, and export prompt templates as .txt or .json",
      "Voice input via the Web Speech API",
    ],
  },
  {
    slug: "mariam-shop-ecommerce",
    title: "Mariam.shop E-Commerce",
    description:
      "Production-ready storefront with Stripe checkout, NextAuth role-based access, a protected admin dashboard, and an OpenAI-powered support chatbot.",
    tech: ["Next.js 16", "TypeScript", "Prisma", "Neon Postgres", "Stripe", "NextAuth", "OpenAI SDK", "Zustand"],
    github: "https://github.com/MaryamMumtaz-piaic/Maryam-E-Commerce",
    live: "",
    image: "/Maryam-shop.png",
    featured: true,
    category: "Full Stack",
    highlights: [
      "Full shopping flow: catalog, search, sorting, cart, and wishlist",
      "Stripe Checkout with a webhook that records orders",
      "NextAuth v5 authentication with USER and ADMIN roles",
      "Admin dashboard for products, order status, and bulk catalog import",
      "Embedded OpenAI support chatbot for shopping queries",
      "Runs on deterministic mock data when no DATABASE_URL is set",
    ],
  },
  {
    slug: "modern-ecommerce-platform",
    title: "Modern E-Commerce Platform",
    description:
      "Clothing e-commerce storefront with real-time inventory, Stripe payments, and an order tracking dashboard.",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "Stripe"],
    github: "https://github.com/MaryamMumtaz-piaic/E-commerce-Website",
    live: "https://e-commerce-website-liart-two.vercel.app/",
    image: "/images/e-commerce.PNG",
    featured: true,
    category: "Full Stack",
    highlights: [
      "Product catalog managed through Sanity CMS",
      "Stripe payment integration",
      "Real-time inventory and order tracking dashboard",
    ],
  },
  {
    slug: "luxe-beauty-cosmetics",
    title: "Luxe Beauty Cosmetics Site",
    description:
      "Luxury cosmetics brand site with 3D product scenes and smooth-scroll motion design, built with Claude Code against a documented design system.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Three.js", "Framer Motion", "Lenis", "Tailwind CSS"],
    github: "https://github.com/MaryamMumtaz-piaic/claudecode-cosmetic-website",
    live: "",
    image: "",
    featured: false,
    category: "Full Stack",
    highlights: [
      "3D product visuals via React Three Fiber and Drei",
      "Smooth-scroll experience powered by Lenis",
      "Framer Motion animation throughout",
      "Design system and agent specs committed alongside the code",
    ],
  },
];

export const hackathons = [
  {
    title: "Physical AI Textbook",
    event: "Eventon Hackathon I",
    description:
      "Built an AI-native platform for Humanoid Robotics education with custom RAG agents and bilingual support including Urdu translation.",
    tech: ["Docusaurus", "RAG", "Python", "Cloud Native"],
    live: "https://ai-native-book-iota.vercel.app/",
    image: "/images/physical Ai.png",
    achievement: "Participant",
  },
  {
    title: "Evolution of Todo",
    event: "Eventon Hackathon II",
    description:
      "Evolved a simple todo app into a full AI-powered task management system deployed on Kubernetes with Dapr integration.",
    tech: ["OpenAI", "Next.js", "Dapr", "Kubernetes"],
    live: "https://todo-app-sigma-hazel-46.vercel.app/",
    image: "/images/Todo-app.png",
    achievement: "Participant",
  },
  {
    title: "LearnFlow AI",
    event: "Eventon Hackathon III",
    description:
      "Created an autonomous learning platform with microservices architecture, persistent memory, and AI-driven struggle detection.",
    tech: ["Kafka", "Next.js 15", "Goose AI", "Dapr"],
    live: "https://frontend-rho-seven-ssq2gwtp54.vercel.app/",
    image: "/images/learnflow-app.PNG",
    achievement: "Participant",
  },
];

export const skillCategories = [
  {
    category: "AI & Agentic Systems",
    skills: [
      { name: "Agentic AI", level: 95 },
      { name: "Multi-Agent Systems", level: 92 },
      { name: "OpenAI SDK", level: 95 },
      { name: "LangChain / LangGraph", level: 90 },
      { name: "CrewAI", level: 88 },
      { name: "MCP", level: 92 },
      { name: "RAG", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "AI Automation & n8n", level: 90 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 93 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 92 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 93 },
      { name: "FastAPI", level: 92 },
      { name: "PHP", level: 80 },
      { name: "SQL", level: 88 },
      { name: "PostgreSQL", level: 88 },
      { name: "Prisma", level: 85 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Minikube", level: 88 },
      { name: "Helm", level: 82 },
      { name: "GitHub Actions", level: 85 },
      { name: "Vercel", level: 95 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    category: "Databases & Infrastructure",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "Neon", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 82 },
      { name: "Vector Databases", level: 88 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Cursor", level: 90 },
      { name: "Claude Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 88 },
      { name: "Canva", level: 92 },
    ],
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I build AI agents and multi-agent systems, AI-powered automation workflows (code and no-code with n8n), and full-stack web platforms with Next.js and FastAPI. I also take on consulting for teams adopting agentic AI.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Agentic AI with the OpenAI SDK, LangChain, LangGraph, CrewAI, MCP, and RAG on the AI side; Next.js, React, TypeScript, Python, and FastAPI for full-stack work; Docker, Kubernetes, and Vercel for deployment.",
  },
  {
    question: "Are you available for work?",
    answer:
      "Yes. Always open to full-time opportunities, freelance projects, consulting, and strategic partnerships. The fastest way to reach me is email or LinkedIn.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by clarifying requirements and constraints, then plan the architecture, build iteratively with regular checkpoints, and ship with CI/CD so changes stay safe to deploy.",
  },
  {
    question: "What is your experience with AI agents?",
    answer:
      "I completed a 30-day agent engineering program spanning single intelligent agents, multi-agent systems, and enterprise AI platforms — including a multi-tenant RAG platform, a visual workflow automation builder, and a command center that orchestrates all 29 preceding agents.",
  },
  {
    question: "Do you offer support after delivery?",
    answer:
      "Yes. I provide post-launch support including bug fixes, feature updates, performance work, and technical consultation.",
  },
];

export const heroStats = [
  { value: "100+", label: "Projects Built" },
  { value: "30+", label: "Projects Live" },
  { value: "20+", label: "Projects Sold" },
];

export const achievements = [
  { label: "AI Agents Built", value: "100+" },
  { label: "Portfolio Projects", value: "22" },
  { label: "Anthropic Certifications", value: "5" },
  { label: "Hackathons", value: "3" },
];
