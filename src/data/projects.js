export const projectsData = [
  {
    id: "handshake-ai",
    title: "Handshake.AI",
    subtitle: "AI-Powered Collaboration & Workflow Platform",
    tagline: "Flagship personal project engineered with an extensible AI layer.",
    category: ["AI", "Full-Stack", "React"],
    isFlagship: true,
    status: "Independent Project · Active Development",
    timeline: "2026 – Present",
    statusVariant: "in-progress", // 'completed', 'in-progress', 'planned'
    featured: true,
    focusAreas: [
      "Full-Stack Development",
      "React.js",
      "TypeScript",
      "AI/LLM Integration",
      "API Development",
      "Product Architecture",
    ],
    links: {
      github: "https://github.com/salmanahmed7587",
      demo: null, // Placeholder: update when deployed
      caseStudy: null,
    },
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"],
    plannedAiTechnologies: ["LLM APIs", "RAG Pipeline", "AI Agents", "Tool Calling", "Vector DB"],
    description:
      "Building Handshake.AI as an independent project while expanding expertise in full-stack development and AI-powered applications. The project focuses on applying modern web technologies and AI capabilities to build a practical, production-oriented application.",
    details: {
      problem:
        "[Placeholder — In Progress] Modern teams and professionals often navigate fragmented communication and manual task orchestration, leading to context loss and operational overhead.",
      solution:
        "[Placeholder — In Progress] Handshake.AI provides a streamlined workspace combining structured collaboration with AI-assisted insight synthesis and workflow automation.",
      targetUsers:
        "Engineers, product managers, and knowledge workers seeking seamless context sharing and intelligent workflow assistance.",
      currentFeatures: [
        "Component-driven responsive interface with modern dark aesthetic",
        "Client-side state orchestration and structured API client interfaces",
        "Modular architecture scaffolding prepared for asynchronous AI stream consumption",
        "Authentication workflow design and token storage security models",
      ],
      plannedAiFeatures: [
        "Contextual meeting and conversation synthesis via LLM APIs",
        "Retrieval-Augmented Generation (RAG) over workspace notes and shared documents",
        "Autonomous workflow agents capable of structured tool calling",
        "Semantic search powered by embeddings and vector storage",
      ],
      architectureSteps: [
        { id: "user", label: "User", sub: "Web Client", type: "client" },
        { id: "frontend", label: "Frontend", sub: "React + TypeScript", type: "client" },
        { id: "api", label: "Backend API", sub: "Node.js / Express Gateway", type: "server" },
        { id: "db", label: "Database", sub: "PostgreSQL / Prisma", type: "storage" },
        { id: "ai", label: "AI Layer", sub: "Orchestration & Tools (Planned)", type: "ai" },
        { id: "llm", label: "LLM Services", sub: "Provider APIs (Planned)", type: "ai" },
      ],
    },
  },
  {
    id: "ai-crm-platform",
    title: "AI Business / CRM Platform",
    subtitle: "Next-Generation Intelligent Customer & Lead Management",
    tagline: "Planned AI-driven enterprise CRM architecture.",
    category: ["AI", "Full-Stack"],
    isFlagship: false,
    status: "Planned / Concept Scaffolding",
    statusVariant: "planned",
    featured: true,
    links: {
      github: "https://github.com/salmanahmed7587",
      demo: null,
    },
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    plannedAiTechnologies: ["Natural Language Search", "AI Summaries", "Predictive Analytics"],
    description:
      "A conceptual enterprise platform blueprint designed to automate customer relationships, pipeline tracking, and sales operations with integrated AI intelligence.",
    details: {
      problem:
        "Traditional CRMs require excessive manual data logging and offer little predictive guidance on customer health or follow-up timing.",
      solution:
        "An AI-native dashboard architecture that automates record summarization, suggests high-priority next actions, and allows natural language queries over sales records.",
      plannedModules: [
        { name: "Leads & Pipeline", status: "Planned", desc: "Automated scoring and stage progression tracking." },
        { name: "Customer Profiles", status: "Planned", desc: "Unified activity history and contract timeline." },
        { name: "Task Automation", status: "Planned", desc: "AI-assisted follow-up scheduling and notification rules." },
        { name: "AI Summaries", status: "Planned", desc: "Automated synthesis of call transcripts and customer notes." },
        { name: "Natural Language Search", status: "Planned", desc: "Querying database records via conversational prompts." },
        { name: "Business Insights", status: "Planned", desc: "Predictive churn alerts and revenue trend visualization." },
      ],
    },
  },
  {
    id: "local-trade-street",
    title: "Local Trade Street Management Suite",
    subtitle: "Enterprise Business & Vendor Management Dashboard",
    tagline: "Commercial dashboard modules developed during internship.",
    category: ["Professional Work", "React"],
    isFlagship: false,
    status: "Production Internship Work",
    statusVariant: "completed",
    featured: true,
    links: {
      github: "https://github.com/salmanahmed7587",
      demo: null, // Proprietary enterprise system
    },
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Context API",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
      "Axios",
    ],
    description:
      "Frontend dashboard architecture engineered at Talentrise Technokrate. Included end-to-end implementation of vendor workflows, telecaller panels, Super Admin controls, and dynamic Excel data import pipelines.",
    details: {
      focusAreas: [
        "Modular React components and reusable design patterns",
        "Role-based routing (Super Admin, Telecaller, Vendor)",
        "Excel spreadsheet upload, preview table, validation & ingestion",
        "Dynamic subscription orders and payment checkout states",
        "Standardized Axios interceptors and user-friendly toast notifications",
      ],
      note: "Screenshots and proprietary code are protected under non-disclosure; architectural highlights and engineering practices are showcased above.",
    },
  },
  {
    id: "wind-forecast",
    title: "Wind Generation Forecast Dashboard",
    subtitle: "Real-Time Energy Telemetry & Analytics",
    tagline: "Live production-grade weather & energy forecast dashboard.",
    category: ["React", "Full-Stack"],
    isFlagship: false,
    status: "Completed / Live",
    statusVariant: "completed",
    featured: false,
    links: {
      github: "https://github.com/salmanahmed7587",
      demo: "https://wind-generation-forecast-dashboard.vercel.app",
    },
    technologies: ["React.js", "Tailwind CSS", "Recharts", "REST APIs"],
    description:
      "Production-quality telemetry dashboard visualizing real-time wind generation data from the Elexon BMRS API with responsive charts, performance tracking, and historical trend comparisons.",
  },
  {
    id: "fenrir-security",
    title: "Fenrir Security Interface",
    subtitle: "Cybersecurity Attack Surface Testing Platform",
    tagline: "Modern UI/UX for automated vulnerability assessment.",
    category: ["React"],
    status: "Completed / Live",
    statusVariant: "completed",
    featured: false,
    links: {
      github: "https://github.com/salmanahmed7587",
      demo: "https://fenrir-security-frontend-design-cha.vercel.app",
    },
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX"],
    description:
      "A frontend design challenge showcasing a sleek, dark-mode cybersecurity product interface with dynamic scan results, vulnerability severity indicators, and animated data flows.",
  },
  {
    id: "cinema-house",
    title: "Cinema House",
    subtitle: "Movie Discovery & Information Portal",
    tagline: "Responsive entertainment browser with search & details.",
    category: ["React"],
    status: "Completed / Live",
    statusVariant: "completed",
    featured: false,
    links: {
      github: "https://github.com/salmanahmed7587",
      demo: "https://cinema-house-weld.vercel.app",
    },
    technologies: ["React.js", "REST APIs", "CSS3"],
    description:
      "Movie exploration application consuming third-party entertainment APIs with live search, genre filters, and responsive poster layouts.",
  },
  {
    id: "book-inventory",
    title: "Book Inventory App",
    subtitle: "Catalog & State Management System",
    tagline: "CRUD inventory management with responsive state.",
    category: ["React"],
    status: "Completed / Live",
    statusVariant: "completed",
    featured: false,
    links: {
      github: "https://github.com/salmanahmed7587",
      demo: "https://book-inventory-tan.vercel.app/",
    },
    technologies: ["React.js", "State Management", "CSS3"],
    description:
      "Interactive collection manager featuring real-time additions, metadata edits, deletions, and local persistence.",
  },
]
