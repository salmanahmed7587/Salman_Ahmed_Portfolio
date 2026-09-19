import { Sparkles, ArrowRight, ExternalLink, Cpu, Layout, Server, Database, Shield, Bot, Terminal, Layers, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react"
import { Github } from "../ui/Icons"
import { Badge } from "../ui/Badge"
import { useScrollSpy } from "../../lib/hooks/useScrollSpy"

export const HandshakeStickyScroll = ({ project }) => {
  const storySteps = [
    {
      id: "step-01-overview",
      number: "01",
      title: "Project Overview",
      subtitle: "Flagship AI Productivity Workspace",
      content:
        "Handshake.AI is an active independent software project engineered by Salman Ahmed. It combines component-driven React frontend architecture with a decoupled Node/Express backend and an extensible AI service layer for knowledge workers.",
      highlights: ["Independent Project", "Active Development (2026 – Present)", "Full-Stack Architecture"],
    },
    {
      id: "step-02-problem",
      number: "02",
      title: "The Problem Space",
      subtitle: "Context Loss Across Disjointed Tools",
      content:
        "Modern engineering and product teams constantly juggle fragmented messaging channels, disjointed document repositories, and manual follow-ups. Valuable technical context is routinely misplaced, leading to alignment overhead and cognitive fatigue.",
      highlights: ["Context fragmentation", "Manual task orchestration", "Communication silos"],
    },
    {
      id: "step-03-solution",
      number: "03",
      title: "The Engineered Solution",
      subtitle: "Intelligent Unified Workspace",
      content:
        "Handshake.AI provides a consolidated collaboration environment designed with an event-driven architecture. Structured meeting takeaways, asynchronous discussion threads, and action items are synthesized into a coherent workflow surface.",
      highlights: ["Unified workspace canvas", "Structured insight synthesis", "Context preservation"],
    },
    {
      id: "step-04-features",
      number: "04",
      title: "Core Features & UI Engineering",
      subtitle: "Production-Quality Client Foundation",
      content:
        "Built using React 19 functional components and TypeScript, the application emphasizes responsive dark SaaS aesthetics, deterministic client state transitions, token session management, and defensive input validation.",
      highlights: ["Modular component hierarchy", "Role-based token authentication", "Subtle micro-interactions"],
    },
    {
      id: "step-05-architecture",
      number: "05",
      title: "Decoupled Architecture",
      subtitle: "Multi-Tier Separation of Concerns",
      content:
        "The system pipeline is cleanly isolated: the client React SPA communicates exclusively through REST API gateway routes to Node.js/Express controllers. Relational state is persisted in PostgreSQL, while the AI service layer is segregated behind server-side proxies.",
      highlights: ["Client ➔ API Gateway", "Database isolation", "Server-only AI key security"],
    },
    {
      id: "step-06-technology",
      number: "06",
      title: "Technical Stack",
      subtitle: "Modern, Scalable Technologies",
      content:
        "Every dependency is chosen for reliability and developer velocity: React.js for declarative views, TypeScript for static contract typing, Tailwind CSS for design system tokens, and Node.js for scalable HTTP routing.",
      highlights: ["React.js & TypeScript", "Tailwind CSS", "Node.js & Express.js", "PostgreSQL"],
    },
    {
      id: "step-07-ai-integration",
      number: "07",
      title: "AI Integration & Services",
      subtitle: "Planned Intelligent Capabilities",
      content:
        "The AI tier is being developed in stages: streaming markdown token rendering is currently implemented, while RAG vector document search, autonomous task agents, and structured tool calling are in active research and prototyping.",
      highlights: ["Token streaming UI (Active)", "RAG Vector Pipeline (Planned)", "Tool Calling Agents (Planned)"],
    },
    {
      id: "step-08-status",
      number: "08",
      title: "Current Status & Roadmap",
      subtitle: "Evidence-Based Delivery",
      content:
        "Handshake.AI is in continuous active development. UI scaffolding, state stores, and backend endpoints are operational. AI streaming integration is being refined prior to public deployment.",
      highlights: ["Active Personal Initiative", "GitHub Repository", "Deployment in Progress"],
    },
  ]

  const stepIds = storySteps.map((s) => s.id)
  const activeStepId = useScrollSpy(stepIds, { rootMargin: "-25% 0px -45% 0px" })

  const activeIndex = Math.max(
    0,
    storySteps.findIndex((s) => s.id === activeStepId)
  )
  const activeStep = storySteps[activeIndex] || storySteps[0]

  const scrollToStep = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="rounded-3xl bg-slate-900/80 border-2 border-cyan-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              FLAGSHIP AI CASE STUDY
            </span>
            <Badge variant="primary" className="font-mono">
              {project.status}
            </Badge>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-cyan-400 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Repository</span>
          </a>
          <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950/60 text-slate-500 border border-slate-800 text-xs font-mono">
            Deployment In Progress
          </span>
        </div>
      </div>

      {/* 2-Column Sticky Case Study Layout */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT: Pinned Mock Application Interface */}
        <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-4">
          
          {/* Mock Window Container */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Window Titlebar */}
            <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] text-slate-500 pl-2">handshake-ai.workspace</span>
              </div>

              {/* Step Counter Indicator */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-400 bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800">
                <span>0{activeIndex + 1}</span>
                <span className="text-slate-600">/</span>
                <span>08</span>
              </div>
            </div>

            {/* Illustrative Mockup Canvas (transitions with activeIndex) */}
            <div className="p-5 sm:p-6 min-h-[340px] flex flex-col justify-between transition-all duration-300">
              
              {/* State 01 & 08: Product Overview / Status */}
              {(activeIndex === 0 || activeIndex === 7) && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-200">Handshake.AI Workspace</p>
                        <p className="text-[10px] text-slate-500 font-mono">React 19 + TypeScript + AI</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Active Development
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <p className="text-xs font-bold text-cyan-400">Client UI</p>
                      <p className="text-[10px] text-slate-400 mt-1">Modular React</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <p className="text-xs font-bold text-blue-400">Gateway</p>
                      <p className="text-[10px] text-slate-400 mt-1">REST API</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <p className="text-xs font-bold text-purple-400">AI Engine</p>
                      <p className="text-[10px] text-slate-400 mt-1">LLM Services</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                    <p className="text-[11px] font-mono text-cyan-400 uppercase">Focus Areas:</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Full-Stack Development · React.js · TypeScript · AI/LLM Integration · API Development · Product Architecture
                    </p>
                  </div>
                </div>
              )}

              {/* State 02: Problem Space */}
              {activeIndex === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs space-y-1">
                    <p className="font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      Current Friction in Knowledge Work
                    </p>
                    <p className="text-[11px] text-amber-300/80">
                      Disjointed apps scatter crucial project context across chat threads and static docs.
                    </p>
                  </div>

                  <div className="space-y-2">
                    {["Fragmented messaging & notes", "Manual context synthesis overhead", "Lack of intelligent workflow follow-ups"].map((issue, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                        <span>{issue}</span>
                        <span className="text-rose-400 text-[10px] font-mono">High Overhead</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* State 03 & 04: Solution & Features */}
              {(activeIndex === 2 || activeIndex === 3) && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300">Synthesized Workflows</span>
                    <span className="text-[10px] font-mono text-cyan-400">Structured State</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span>Feature Module</span>
                      <span>Implementation</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-200">
                      <span>Responsive Workspace Canvas</span>
                      <span className="text-emerald-400 text-[11px] font-mono">React 19 + Tailwind</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-200">
                      <span>API Interceptors & Token Store</span>
                      <span className="text-emerald-400 text-[11px] font-mono">Axios / TypeScript</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-200">
                      <span>Streaming AI Buffer</span>
                      <span className="text-cyan-400 text-[11px] font-mono">Chunked State</span>
                    </div>
                  </div>
                </div>
              )}

              {/* State 05: Architecture Flow */}
              {activeIndex === 4 && (
                <div className="space-y-2.5 animate-in fade-in duration-300">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-center text-xs text-cyan-300 font-mono font-bold">
                    User Web Client (React 19 + TypeScript)
                  </div>
                  <div className="text-center text-slate-600 text-xs font-mono">↓ REST JSON</div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-blue-500/30 text-center text-xs text-blue-300 font-mono font-bold">
                    Backend API Gateway (Node.js & Express)
                  </div>
                  <div className="text-center text-slate-600 text-xs font-mono">↓ Transactions</div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-center text-xs text-emerald-300 font-mono font-bold">
                    PostgreSQL Database Tier
                  </div>
                  <div className="text-center text-purple-400 text-xs font-mono">↓ Decoupled Service</div>
                  <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-center text-xs text-purple-300 font-mono font-bold">
                    AI Layer & LLM Services (Planned)
                  </div>
                </div>
              )}

              {/* State 06: Technology Stack */}
              {activeIndex === 5 && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <p className="text-xs font-mono text-cyan-400 uppercase">Core Technology Choices:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "React.js", role: "Component UI" },
                      { name: "TypeScript", role: "Static Typing" },
                      { name: "Tailwind CSS", role: "Design System" },
                      { name: "Node.js", role: "Server Runtime" },
                      { name: "Express.js", role: "REST Gateway" },
                      { name: "PostgreSQL", role: "Relational Store" },
                    ].map((tech) => (
                      <div key={tech.name} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        <p className="text-xs font-bold text-slate-200">{tech.name}</p>
                        <p className="text-[10px] text-slate-500">{tech.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* State 07: AI Integration */}
              {activeIndex === 6 && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
                    <p className="text-xs font-bold text-purple-300 mb-1">AI Service Roadmap</p>
                    <p className="text-[11px] text-purple-200/80">
                      Decoupled backend endpoints for streaming completions and structured tool schema execution.
                    </p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">Token Streaming UI</span>
                      <span className="text-cyan-400 font-mono text-[10px]">Implemented</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">RAG Document Ingestion</span>
                      <span className="text-purple-400 font-mono text-[10px]">Planned</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-300">Tool Calling Agents</span>
                      <span className="text-purple-400 font-mono text-[10px]">Planned</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Illustrative Mockup Notice */}
              <div className="pt-3 border-t border-slate-900 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                <span>Illustrative Architecture Canvas</span>
                <span className="text-cyan-400">Step {activeStep.number} of 08</span>
              </div>

            </div>

          </div>

          {/* Quick Step Indicators */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {storySteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => scrollToStep(step.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  activeIndex === idx
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                    : "bg-slate-950 text-slate-500 hover:text-slate-300 border border-slate-800"
                }`}
              >
                {step.number} {step.title.split(" ")[0]}
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT: Scrollable Story Sections */}
        <div className="lg:col-span-6 space-y-16">
          {storySteps.map((step, idx) => {
            const isActive = activeIndex === idx

            return (
              <div
                key={step.id}
                id={step.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-slate-950 border-cyan-500/60 shadow-xl shadow-cyan-950/20 ring-1 ring-cyan-500/20"
                    : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                    Phase {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Handshake.AI Story
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">
                  {step.title}
                </h4>
                <p className="text-xs font-mono text-cyan-400 mb-4">{step.subtitle}</p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {step.content}
                </p>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {step.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-xs font-mono text-slate-300 border border-slate-800"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}

export default HandshakeStickyScroll
