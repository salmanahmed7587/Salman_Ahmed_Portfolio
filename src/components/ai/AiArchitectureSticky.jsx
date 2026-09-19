import { Sparkles, ArrowDown, Bot, Database, Cpu, Wrench, Shield, CheckCircle2, Terminal, Code2, Layers, Server } from "lucide-react"
import { Badge } from "../ui/Badge"
import { useScrollSpy } from "../../lib/hooks/useScrollSpy"

export const AiArchitectureSticky = () => {
  const pipelineStages = [
    {
      id: "ai-step-01-input",
      step: "01",
      title: "User Input & Intent Capture",
      sub: "Natural Language Prompt",
      status: "Implemented",
      statusVariant: "emerald",
      icon: Terminal,
      description:
        "The user initiates an action or natural language prompt via the client interface. The input is sanitized against injection attacks and structured into a standard message payload.",
      technicalDetails: [
        "Client-side input sanitization",
        "Length validation & token estimate",
        "Deterministic message ID tagging",
      ],
    },
    {
      id: "ai-step-02-app",
      step: "02",
      title: "Application Client State",
      sub: "React 19 SPA & Stream Listener",
      status: "Implemented",
      statusVariant: "emerald",
      icon: Code2,
      description:
        "The React client mounts an AbortController, manages optimistic conversational state, and prepares an asynchronous HTTP reader to consume chunked Server-Sent Events.",
      technicalDetails: [
        "Optimistic UI state dispatch",
        "AbortSignal for user cancellations",
        "Asynchronous stream buffer allocation",
      ],
    },
    {
      id: "ai-step-03-gateway",
      step: "03",
      title: "Backend API Gateway",
      sub: "Node.js / Express Proxy Route",
      status: "Implemented",
      statusVariant: "emerald",
      icon: Server,
      description:
        "The request hits a secure internal server endpoint. The backend validates user session tokens, enforces rate limits, and attaches the private LLM API secret without exposing it to the browser.",
      technicalDetails: [
        "Zero client API key leakage",
        "JWT session & role authorization",
        "IP-based and user-based rate limiting",
      ],
    },
    {
      id: "ai-step-04-layer",
      step: "04",
      title: "AI Orchestration Layer",
      sub: "Prompt Boundary & Guardrails",
      status: "Implemented",
      statusVariant: "emerald",
      icon: Cpu,
      description:
        "The server formats the system prompt with strict factual boundaries, temperature control (0.0 - 0.2 for deterministic factual output), and instructions to reject ungrounded assumptions.",
      technicalDetails: [
        "Strict negative constraint boundaries",
        "Temperature tuning for minimal hallucination",
        "Token context window budget management",
      ],
    },
    {
      id: "ai-step-05-rag",
      step: "05",
      title: "RAG / Document Retrieval",
      sub: "Vector Embeddings & Context Injection",
      status: "Exploring / Planned",
      statusVariant: "purple",
      icon: Database,
      description:
        "Planned pipeline: Relevant documentation chunks are retrieved from a vector database (e.g. pgvector) via cosine similarity search and injected directly into the LLM context prompt.",
      technicalDetails: [
        "Semantic document chunking strategy",
        "Embedding model inference (Planned)",
        "Cosine similarity ranking & thresholding",
      ],
    },
    {
      id: "ai-step-06-tools",
      step: "06",
      title: "Structured Tool Calling",
      sub: "JSON Schema Function Dispatch",
      status: "Exploring / Planned",
      statusVariant: "purple",
      icon: Wrench,
      description:
        "Planned capability: The model emits strictly typed JSON arguments matching application tool schemas (`searchProjects()`, `getTaskDetails()`), verified by backend validators before execution.",
      technicalDetails: [
        "Strict JSON schema parameter definitions",
        "Safe sandboxed function dispatch",
        "Tool error fallback & retry bounds",
      ],
    },
    {
      id: "ai-step-07-agent",
      step: "07",
      title: "AI Agent Reasoning Loop",
      sub: "Autonomous Goal Verification",
      status: "Exploring / Planned",
      statusVariant: "purple",
      icon: Bot,
      description:
        "Planned capability: An autonomous ReAct (Reason + Act) loop that evaluates tool outputs, inspects intermediate states, and iteratively reaches the defined user objective.",
      technicalDetails: [
        "ReAct thought-action-observation cycles",
        "Execution recursion depth limits",
        "State memory retention per task",
      ],
    },
    {
      id: "ai-step-08-response",
      step: "08",
      title: "Response Streaming & UI Action",
      sub: "Chunked Token Render to View",
      status: "Implemented",
      statusVariant: "emerald",
      icon: Sparkles,
      description:
        "Tokens stream continuously back through the API gateway to the client view with typewriter rendering, markdown parsing, and clean error state recovery.",
      technicalDetails: [
        "Real-time token typewriter rendering",
        "Markdown syntax live formatting",
        "Non-blocking main UI thread execution",
      ],
    },
  ]

  const stageIds = pipelineStages.map((s) => s.id)
  const activeStageId = useScrollSpy(stageIds, { rootMargin: "-25% 0px -45% 0px" })

  const activeIndex = Math.max(
    0,
    pipelineStages.findIndex((s) => s.id === activeStageId)
  )
  const activeStage = pipelineStages[activeIndex] || pipelineStages[0]

  const scrollToStage = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section id="ai-architecture" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            End-to-End System Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            From User Intent to AI Action
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            A progressive trace of how modern AI applications handle prompts from client intent through gateway security, prompt bounds, and planned RAG/tool orchestration.
          </p>
        </div>

        {/* 2-Column Sticky Architecture Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Pinned Interactive Pipeline Visualization */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-4">
            
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Active Pipeline Node
                  </span>
                  <h4 className="text-sm font-bold text-slate-100">{activeStage.title}</h4>
                </div>
                <Badge
                  variant={activeStage.statusVariant === "emerald" ? "emerald" : "purple"}
                  className="font-mono text-[10px]"
                >
                  {activeStage.status}
                </Badge>
              </div>

              {/* Sequential Illuminated Flow Nodes */}
              <div className="space-y-2">
                {pipelineStages.map((stage, idx) => {
                  const Icon = stage.icon
                  const isCurrent = activeIndex === idx
                  const isPast = activeIndex > idx

                  return (
                    <div
                      key={stage.id}
                      onClick={() => scrollToStage(stage.id)}
                      className={`p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? "bg-slate-950 border-cyan-500 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/30"
                          : isPast
                          ? "bg-slate-950/40 border-slate-800/80 opacity-80"
                          : "bg-slate-950/20 border-slate-800/40 opacity-40 hover:opacity-70"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`text-[10px] font-mono font-bold ${isCurrent ? "text-cyan-400" : "text-slate-500"}`}>
                          {stage.step}
                        </span>
                        <Icon className={`w-3.5 h-3.5 ${isCurrent ? "text-cyan-400" : "text-slate-400"}`} />
                        <span className={`text-xs font-semibold ${isCurrent ? "text-slate-100" : "text-slate-400"}`}>
                          {stage.title}
                        </span>
                      </div>

                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                        stage.statusVariant === "emerald"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-purple-500/10 text-purple-400"
                      }`}>
                        {stage.status.split(" ")[0]}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Progress Footer */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Stage {activeStage.step} of 08</span>
                <span className="text-cyan-400 font-bold">{Math.round(((activeIndex + 1) / 8) * 100)}% Complete</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Scrollable Pipeline Stage Cards */}
          <div className="lg:col-span-7 space-y-12">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon
              const isActive = activeIndex === idx

              return (
                <div
                  key={stage.id}
                  id={stage.id}
                  className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-xl ${
                    isActive
                      ? "bg-slate-900 border-cyan-500/60 shadow-cyan-950/20 ring-1 ring-cyan-500/20"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                        Phase {stage.step}
                      </span>
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>

                    <Badge
                      variant={stage.statusVariant === "emerald" ? "emerald" : "purple"}
                      className="font-mono text-xs"
                    >
                      {stage.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{stage.sub}</p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {stage.description}
                  </p>

                  <div className="pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono uppercase text-slate-500 mb-2">
                      Engineering Guardrails & Standards:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {stage.technicalDetails.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

export default AiArchitectureSticky
