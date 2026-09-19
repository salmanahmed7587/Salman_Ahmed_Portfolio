import { useState } from "react"
import { ChevronDown, ChevronUp, Cpu, ShieldCheck, Database, Code, CheckCircle2 } from "lucide-react"
import { engineeringDecisions } from "../../data/decisions"

export const TechnicalDecisions = () => {
  const [openIds, setOpenIds] = useState(["why-react", "api-keys-security"])

  const toggleDecision = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="decisions" className="py-24 bg-slate-950/80 border-b border-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <Cpu className="w-3.5 h-3.5" />
            Architectural Rationale
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Engineering Decisions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Software engineering is a discipline of trade-offs. Here is the technical reasoning behind key technology and security choices.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {engineeringDecisions.map((item) => {
            const isOpen = openIds.includes(item.id)

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all hover:border-slate-700"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleDecision(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100">
                      {item.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">{item.summary}</p>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expandable Explanation Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 animate-in fade-in duration-200">
                    <p>{item.details}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default TechnicalDecisions
