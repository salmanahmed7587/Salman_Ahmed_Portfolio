import { useState } from "react"
import { Building, CheckCircle2, AlertCircle, Sparkles, BookOpen, Layers, Workflow, ShieldCheck } from "lucide-react"
import { Modal } from "../ui/Modal"
import { Badge } from "../ui/Badge"
import { experienceData } from "../../data/experience"

export const ExperienceModal = ({ isOpen, onClose, experience }) => {
  const [activeTab, setActiveTab] = useState("workflows")
  const exp = experience || experienceData[0]
  const { modalDetails } = exp

  const tabs = [
    { id: "workflows", label: "Production Workflows", icon: Workflow },
    { id: "challenges", label: "Engineering Challenges", icon: AlertCircle },
    { id: "responsibilities", label: "Responsibilities", icon: Layers },
    { id: "learnings", label: "Key Learnings", icon: BookOpen },
  ]

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${exp.role} — ${exp.company}`}
      subtitle={`Duration: ${exp.period} • Real-world Enterprise React.js Engineering`}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6 text-sm text-slate-300">
        
        {/* Top Summary Banner */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Verified Commercial Experience
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {modalDetails.overview}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {exp.technologies.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-xs font-medium transition-colors border-b-2 whitespace-nowrap ${
                  isActive
                    ? "border-cyan-400 text-cyan-300 bg-slate-800/60"
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="pt-2">
          {/* Workflows Tab */}
          {activeTab === "workflows" && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Detailed modules and operational interfaces built during the internship:
              </p>
              <div className="grid gap-3">
                {modalDetails.workflows.map((wf, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/90 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <h4 className="text-sm font-semibold text-slate-200">{wf.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                      {wf.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === "challenges" && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Real technical trade-offs and problem-solving scenarios encountered in production:
              </p>
              <div className="grid gap-4">
                {modalDetails.engineeringChallenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0">
                        Problem
                      </span>
                      <h4 className="text-sm font-semibold text-slate-200">{item.challenge}</h4>
                    </div>
                    <div className="flex items-start gap-2 pt-1 border-t border-slate-800/80">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shrink-0">
                        Solution
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities Tab */}
          {activeTab === "responsibilities" && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                Core daily software engineering contributions:
              </p>
              <div className="space-y-2.5">
                {modalDetails.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learnings Tab */}
          {activeTab === "learnings" && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                Key professional takeaways that shaped Salman's engineering approach:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {modalDetails.learnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/90 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs font-mono shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{learning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* NDA & Non-Disclosure Notice */}
        <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-500 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            Proprietary company code, private endpoints, and internal databases are protected under professional confidentiality standards.
          </span>
        </div>

      </div>
    </Modal>
  )
}

export default ExperienceModal
