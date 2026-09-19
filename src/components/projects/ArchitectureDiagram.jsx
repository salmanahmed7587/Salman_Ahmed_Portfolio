import { useState } from "react"
import { ArrowRight, Layout, Server, Database, Cpu, Shield, Sparkles, CheckCircle2 } from "lucide-react"
import { defaultSystemArchitecture } from "../../data/architecture"

export const ArchitectureDiagram = ({ architecture = defaultSystemArchitecture }) => {
  const [selectedTier, setSelectedTier] = useState("ai")

  const iconMap = {
    Layout,
    Server,
    Database,
    Cpu,
    Shield,
  }

  const activeTierData = architecture.tiers.find((t) => t.id === selectedTier) || architecture.tiers[0]

  return (
    <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            System Architecture Blueprint
          </div>
          <h4 className="text-lg font-bold text-slate-100">
            {architecture.projectTitle} Multi-Tier Decoupled Pipeline
          </h4>
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Click any tier to inspect architectural components
        </div>
      </div>

      {/* Horizontal Interactive Pipeline Flow */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
        {architecture.tiers.map((tier, index) => {
          const Icon = iconMap[tier.icon] || Server
          const isSelected = selectedTier === tier.id

          return (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`relative p-4 rounded-xl text-left border transition-all flex flex-col justify-between group focus:outline-none ${
                isSelected
                  ? "bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30"
                  : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Tier 0{index + 1}
                  </span>
                  {tier.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Planned
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                  <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {tier.title.split(" ")[0]}
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-slate-400 block mt-2">
                {tier.items.length} Modules
              </span>
            </button>
          )
        })}
      </div>

      {/* Active Tier Component Deep Dive */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h5 className="text-sm font-bold text-slate-100">
              Active Inspection: {activeTierData.title}
            </h5>
          </div>
          {activeTierData.badge && (
            <span className="text-xs font-mono text-purple-400 px-2.5 py-0.5 rounded-full bg-purple-950/40 border border-purple-800/40">
              {activeTierData.badge}
            </span>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {activeTierData.items.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/90 flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-slate-200">{item.name}</span>
              <span className="text-[11px] text-slate-400 mt-1">{item.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pipeline Sequence Footer */}
      <div className="mt-6 pt-4 border-t border-slate-900 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
        <span>User</span>
        <ArrowRight className="w-3 h-3 text-slate-600" />
        <span>React Frontend</span>
        <ArrowRight className="w-3 h-3 text-slate-600" />
        <span>Backend API Gateway</span>
        <ArrowRight className="w-3 h-3 text-slate-600" />
        <span>PostgreSQL Database</span>
        <ArrowRight className="w-3 h-3 text-purple-400" />
        <span className="text-purple-300">AI Layer (RAG & Tools)</span>
        <ArrowRight className="w-3 h-3 text-purple-400" />
        <span className="text-purple-300">LLM Services</span>
      </div>

    </div>
  )
}

export default ArchitectureDiagram
