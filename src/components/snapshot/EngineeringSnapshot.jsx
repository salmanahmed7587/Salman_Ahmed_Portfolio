import { Code, Server, Database, Brain, Sparkles, CheckCircle2, BookOpen } from "lucide-react"
import { Badge } from "../ui/Badge"

export const EngineeringSnapshot = () => {
  const snapshotCategories = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: Code,
      iconColor: "text-cyan-400",
      accentBg: "bg-cyan-500/10 border-cyan-500/20",
      description: "Component architecture, reactive client state, and responsive web performance.",
      skills: [
        { name: "React.js", status: "Professional Experience", variant: "primary" },
        { name: "TypeScript", status: "Professional Experience", variant: "primary" },
        { name: "Next.js", status: "Currently Learning", variant: "purple" },
        { name: "Tailwind CSS", status: "Professional Experience", variant: "primary" },
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: Server,
      iconColor: "text-blue-400",
      accentBg: "bg-blue-500/10 border-blue-500/20",
      description: "HTTP services, REST contract design, and backend business logic execution.",
      skills: [
        { name: "Node.js", status: "Professional Experience", variant: "primary" },
        { name: "Express.js", status: "Professional Experience", variant: "primary" },
        { name: "REST APIs", status: "Professional Experience", variant: "primary" },
      ],
    },
    {
      id: "database",
      title: "Database & Storage",
      icon: Database,
      iconColor: "text-emerald-400",
      accentBg: "bg-emerald-500/10 border-emerald-500/20",
      description: "Structured relational models, document storage, and schema relationships.",
      skills: [
        { name: "MongoDB", status: "Professional Experience", variant: "primary" },
        { name: "PostgreSQL", status: "Working Knowledge", variant: "blue" },
        { name: "MySQL", status: "Working Knowledge", variant: "blue" },
      ],
    },
    {
      id: "ai",
      title: "AI & Modern Workflows",
      icon: Brain,
      iconColor: "text-purple-400",
      accentBg: "bg-purple-500/10 border-purple-500/20",
      description: "Integrating LLM completion models, structured tools, and RAG architectures.",
      skills: [
        { name: "LLM APIs", status: "Currently Learning", variant: "purple" },
        { name: "RAG Pipelines", status: "Currently Learning", variant: "purple" },
        { name: "AI Agents", status: "Currently Learning", variant: "purple" },
        { name: "Tool Calling", status: "Currently Learning", variant: "purple" },
      ],
    },
  ]

  return (
    <section className="py-20 bg-slate-950/80 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Core Competencies
            </div>
            <h2 className="text-3xl font-bold text-slate-100 tracking-tight sm:text-4xl">
              Engineering Snapshot
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Professional
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" /> Working Knowledge
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Currently Learning
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {snapshotCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.accentBg} mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-6 h-6 ${cat.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2">{cat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-800/60">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs py-1"
                    >
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <Badge variant={skill.variant}>{skill.status}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default EngineeringSnapshot
