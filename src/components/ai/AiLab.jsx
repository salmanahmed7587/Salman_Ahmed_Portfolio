import { Sparkles, Database, Bot, Wrench, Workflow, Search, Terminal } from "lucide-react"
import { aiLabData } from "../../data/aiLab"
import { Badge } from "../ui/Badge"

export const AiLab = () => {
  const iconMap = {
    Sparkles,
    Database,
    Bot,
    Wrench,
    Workflow,
    Search,
  }

  const getStatusBadge = (variant, status) => {
    switch (variant) {
      case "building":
        return <Badge variant="primary"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />{status}</Badge>
      case "experimenting":
        return <Badge variant="blue"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" />{status}</Badge>
      case "implemented":
        return <Badge variant="emerald"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{status}</Badge>
      default:
        return <Badge variant="purple"><span className="w-1.5 h-1.5 rounded-full bg-purple-400" />{status}</Badge>
    }
  }

  return (
    <section id="ai-lab" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Applied Research & Exploration
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            AI Lab & Active Experiments
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Salman is deliberately expanding beyond traditional frontend into AI engineering. Each card tracks an active study or prototype topic with clear, honest status demarcation.
          </p>
        </div>

        {/* 6 Experiment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiLabData.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-purple-500/40 transition-all flex flex-col justify-between group shadow-lg shadow-black/10"
              >
                <div>
                  {/* Top Row: Icon + Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    {getStatusBadge(item.statusVariant, item.status)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* What it is */}
                  <div className="mb-4">
                    <p className="text-[11px] font-mono text-slate-500 uppercase mb-1">Concept:</p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.whatItIs}
                    </p>
                  </div>

                  {/* What Salman is building */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4">
                    <p className="text-[11px] font-mono text-cyan-400 uppercase mb-1">
                      Active Investigation:
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.whatSalmanIsBuilding}
                    </p>
                  </div>
                </div>

                {/* Example Project target */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-[10px] text-slate-500 uppercase">Target:</span>
                  <span className="text-slate-300 font-medium truncate max-w-[190px]">
                    {item.exampleProject}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AiLab
