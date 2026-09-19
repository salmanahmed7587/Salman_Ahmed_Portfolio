export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Building responsive, component-driven, and accessible user interfaces.",
      skills: [
        { name: "React.js", tier: "Professional Experience", note: "Hooks, Context, Component Patterns, Virtual DOM" },
        { name: "TypeScript", tier: "Professional Experience", note: "Static typing, Interfaces, Generics, Component contracts" },
        { name: "JavaScript (ES6+)", tier: "Professional Experience", note: "Async/Await, Closures, DOM, Modules" },
        { name: "Tailwind CSS", tier: "Professional Experience", note: "Utility-first CSS, Responsive Design, Custom Themes" },
        { name: "Redux Toolkit", tier: "Professional Experience", note: "Global state, Slices, Dispatchers" },
        { name: "Context API", tier: "Professional Experience", note: "Lightweight state distribution & provider pattern" },
        { name: "Next.js", tier: "Currently Learning", note: "App Router, Server Components, SSR/SSG workflows" },
        { name: "HTML5 & CSS3", tier: "Professional Experience", note: "Semantic structure, Flexbox, Grid, CSS animations" },
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      description: "Developing robust server routes, middleware, and structured communication.",
      skills: [
        { name: "Node.js", tier: "Professional Experience", note: "Runtime environment, Async event loop, Server scripts" },
        { name: "Express.js", tier: "Professional Experience", note: "Routing, Middleware, REST controllers, API endpoints" },
        { name: "REST APIs", tier: "Professional Experience", note: "API contract design & consumption, Status codes, Interceptors" },
        { name: "Axios", tier: "Professional Experience", note: "Request/Response interceptors, Error handling, Auth tokens" },
      ],
    },
    {
      id: "database",
      title: "Databases & Storage",
      description: "Data modeling, schema relationships, and query structuring.",
      skills: [
        { name: "MongoDB", tier: "Professional Experience", note: "Document collections, CRUD operations, Mongoose ODM" },
        { name: "PostgreSQL", tier: "Working Knowledge", note: "Relational schemas, SQL queries, Indexing basics" },
        { name: "MySQL", tier: "Working Knowledge", note: "Relational tables, Primary/Foreign keys, Joins" },
      ],
    },
    {
      id: "ai",
      title: "AI & Modern Intelligent Systems",
      description: "Engineering practical interfaces and workflows powered by LLM models.",
      skills: [
        { name: "LLM APIs", tier: "Currently Learning", note: "Prompt structuring, Streaming completions, Function tokens" },
        { name: "RAG (Retrieval-Augmented Generation)", tier: "Currently Learning", note: "Chunking, Document ingestion, Vector context injection" },
        { name: "AI Agents", tier: "Currently Learning", note: "Autonomous task loops, Memory, Goal-oriented execution" },
        { name: "Tool Calling", tier: "Currently Learning", note: "Structured JSON schema function dispatch" },
        { name: "Generative AI Foundations", tier: "Currently Learning", note: "Embeddings, Token limits, Context window optimization" },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools & Workflow",
      description: "Version control, collaborative shipping, and infrastructure.",
      skills: [
        { name: "Git & GitHub", tier: "Professional Experience", note: "Branching, Pull Requests, Merge conflict resolution" },
        { name: "Vite", tier: "Professional Experience", note: "HMR dev server, Build bundling, Rollup plugins" },
        { name: "ESLint & Prettier", tier: "Professional Experience", note: "Static code analysis, Rule enforcement, Code formatting" },
        { name: "Cloud / DevOps", tier: "Currently Learning", note: "Containerization concepts, CI/CD pipelines, Vercel deployments" },
      ],
    },
  ],
  tiers: [
    {
      id: "professional",
      label: "Professional Experience",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description: "Shipped in commercial production internships (Talentrise & Allomor).",
    },
    {
      id: "working-knowledge",
      label: "Working Knowledge",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description: "Implemented in personal projects, coursework, and labs.",
    },
    {
      id: "learning",
      label: "Currently Learning",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      description: "Under active exploration, study, and prototype development.",
    },
  ],
}
