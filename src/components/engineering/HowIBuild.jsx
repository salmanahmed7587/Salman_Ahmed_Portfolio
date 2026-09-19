import { Layers, CheckCircle2, ArrowRight, Lightbulb, PenTool, Hammer, TestTube2, Rocket, RefreshCcw } from "lucide-react"
import { engineeringProcess } from "../../data/architecture"
import { useScrollSpy } from "../../lib/hooks/useScrollSpy"

export const HowIBuild = () => {
  const stepIds = engineeringProcess.map((s) => `process-step-${s.step}`)
  const activeStepId = useScrollSpy(stepIds, { rootMargin: "-25% 0px -45% 0px" })

  const activeIndex = Math.max(
    0,
    engineeringProcess.findIndex((s) => `process-step-${s.step}` === activeStepId)
  )
  const activeProcess = engineeringProcess[activeIndex] || engineeringProcess[0]

  const iconMap = [Lightbulb, PenTool, Hammer, TestTube2, Rocket, RefreshCcw]

  const scrollToPhase = (step) => {
    const el = document.getElementById(`process-step-${step}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section id="architecture" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Engineering Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            How I Build Software
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            A disciplined 6-stage lifecycle prioritizing requirements clarity, decoupled design, defensive error handling, and iterative telemetry.
          </p>
        </div>

        {/* 2-Column Sticky Process Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Pinned Process Tracker */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-4">
            
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Current Phase Focus
                  </span>
                  <h4 className="text-lg font-bold text-slate-100">{activeProcess.title}</h4>
                </div>
                <div className="text-3xl font-extrabold font-mono text-cyan-400/80">
                  {activeProcess.step}
                </div>
              </div>

              {/* Step Navigation Rail */}
              <div className="space-y-2.5">
                {engineeringProcess.map((step, idx) => {
                  const Icon = iconMap[idx] || Layers
                  const isCurrent = activeIndex === idx
                  const isPast = activeIndex > idx

                  return (
                    <div
                      key={step.step}
                      onClick={() => scrollToPhase(step.step)}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? "bg-slate-950 border-cyan-500 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/30"
                          : isPast
                          ? "bg-slate-950/40 border-slate-800/80 opacity-70"
                          : "bg-slate-950/20 border-slate-800/40 opacity-40 hover:opacity-70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold ${isCurrent ? "text-cyan-400" : "text-slate-500"}`}>
                          {step.step}
                        </span>
                        <Icon className={`w-4 h-4 ${isCurrent ? "text-cyan-400" : "text-slate-400"}`} />
                        <span className={`text-xs font-semibold ${isCurrent ? "text-slate-100" : "text-slate-400"}`}>
                          {step.title}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono text-slate-500">
                        {step.sub.split(" ")[0]}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                  <span>Lifecycle Progression</span>
                  <span className="text-cyan-400 font-bold">{Math.round(((activeIndex + 1) / 6) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                    style={{ width: `${((activeIndex + 1) / 6) * 100}%` }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Scrollable Stage Breakdown Cards */}
          <div className="lg:col-span-7 space-y-12">
            {engineeringProcess.map((step, idx) => {
              const Icon = iconMap[idx] || Layers
              const isActive = activeIndex === idx

              return (
                <div
                  key={step.step}
                  id={`process-step-${step.step}`}
                  className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-xl ${
                    isActive
                      ? "bg-slate-900 border-cyan-500/60 shadow-cyan-950/20 ring-1 ring-cyan-500/20"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
                        Phase {step.step}
                      </span>
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-cyan-500/40">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-1">{step.title}</h3>
                  <p className="text-xs text-cyan-400 font-mono mb-4">{step.sub}</p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono uppercase text-slate-500 mb-2">Key Deliverables:</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {item}
                        </span>
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

export default HowIBuild
