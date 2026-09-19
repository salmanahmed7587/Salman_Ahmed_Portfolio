export const engineeringProcess = [
  {
    step: "01",
    title: "Understand",
    sub: "Requirements & Problem Space",
    description:
      "Deeply analyze business constraints, target personas, and primary use cases. Clarify edge cases and establish measurable success criteria before writing code.",
    deliverables: ["User journeys", "Core problem definition", "Functional scope"],
  },
  {
    step: "02",
    title: "Design",
    sub: "Architecture & Data Contracts",
    description:
      "Map out component hierarchies, REST API schemas, database models, and client state boundaries. Prioritize separation of concerns and interface consistency.",
    deliverables: ["Component tree", "API contracts", "Data schema design"],
  },
  {
    step: "03",
    title: "Build",
    sub: "Frontend, Backend & Integrations",
    description:
      "Develop modular, maintainable code using modern React, TypeScript, and clean CSS. Integrate endpoints with standardized Axios interceptors and defensive typing.",
    deliverables: ["Reusable UI components", "API integration layer", "State stores"],
  },
  {
    step: "04",
    title: "Test",
    sub: "Validation & Edge Handling",
    description:
      "Test input validation, asynchronous error boundaries, loading states, empty states, and cross-device responsiveness under varied network conditions.",
    deliverables: ["Form validation guards", "Error toast handlers", "Responsive checks"],
  },
  {
    step: "05",
    title: "Deploy",
    sub: "Production Shipping",
    description:
      "Deploy via automated CI/CD pipelines (e.g., Vercel, Git triggers). Configure environment variables securely and verify production build bundles.",
    deliverables: ["Production build check", "HTTPS deployment", "Clean environment config"],
  },
  {
    step: "06",
    title: "Improve",
    sub: "Monitoring, Telemetry & Iteration",
    description:
      "Observe user interactions, inspect console telemetry, gather feedback, and iterate on performance, accessibility, and new features.",
    deliverables: ["Core Web Vitals tuning", "User feedback loops", "Refactoring roadmap"],
  },
]

export const defaultSystemArchitecture = {
  projectTitle: "Handshake.AI",
  tiers: [
    {
      id: "client",
      title: "Client Tier",
      icon: "Layout",
      color: "border-cyan-500/40 bg-cyan-950/20 text-cyan-300",
      items: [
        { name: "React 19 SPA", role: "Component UI & virtual DOM" },
        { name: "TypeScript", role: "Static prop & API contract typing" },
        { name: "Tailwind CSS", role: "Responsive dark utility styling" },
        { name: "State / Context", role: "Session & UI interaction store" },
      ],
    },
    {
      id: "api",
      title: "Gateway & API Tier",
      icon: "Server",
      color: "border-blue-500/40 bg-blue-950/20 text-blue-300",
      items: [
        { name: "Node.js / Express", role: "HTTP server & routing layer" },
        { name: "REST Endpoints", role: "Standardized JSON resources" },
        { name: "Rate Limiting", role: "Brute-force & abuse protection" },
        { name: "Auth Middleware", role: "JWT / token session validation" },
      ],
    },
    {
      id: "storage",
      title: "Database Tier",
      icon: "Database",
      color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300",
      items: [
        { name: "PostgreSQL", role: "Structured relational user records" },
        { name: "Prisma / Query Layer", role: "Type-safe database ORM" },
        { name: "Connection Pool", role: "Optimized serverless query pooling" },
      ],
    },
    {
      id: "ai",
      title: "AI & Intelligence Tier (Planned)",
      icon: "Cpu",
      color: "border-purple-500/40 bg-purple-950/20 text-purple-300",
      badge: "In Active Development",
      items: [
        { name: "LLM Completion APIs", role: "Streaming text completions" },
        { name: "RAG Context Retriever", role: "Vector search over docs" },
        { name: "Tool Dispatch Engine", role: "Structured function call execution" },
        { name: "Vector Database", role: "Document embeddings storage" },
      ],
    },
    {
      id: "infra",
      title: "Infrastructure & Security",
      icon: "Shield",
      color: "border-amber-500/40 bg-amber-950/20 text-amber-300",
      items: [
        { name: "Vercel Hosting", role: "Global edge CDN & static assets" },
        { name: "Git CI/CD", role: "Automated linting and preview branches" },
        { name: "Env Secret Vault", role: "Zero client-side API key leakage" },
      ],
    },
  ],
}
