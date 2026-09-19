import { useState } from "react"
import { Building, MapPin, ArrowRight, CheckCircle2, Layers, Cpu, Server, Database, Code2, LayoutDashboard, Workflow } from "lucide-react"
import { experienceData } from "../../data/experience"
import { Badge } from "../ui/Badge"
import { ExperienceModal } from "./ExperienceModal"
import { useScrollSpy } from "../../lib/hooks/useScrollSpy"

export const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null)
  const experienceIds = experienceData.map((e) => `exp-${e.id}`)
  const activeSectionId = useScrollSpy(experienceIds, { rootMargin: "-20% 0px -40% 0px" })

  const activeExpIndex = Math.max(
    0,
    experienceData.findIndex((e) => `exp-${e.id}` === activeSectionId)
  )
  const activeExp = experienceData[activeExpIndex] || experienceData[0]

  const scrollToExperience = (id) => {
    const el = document.getElementById(`exp-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section id="experience" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Verified Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Real-world enterprise application development, MERN full-stack engineering, and backend API integration shipped during commercial internships.
          </p>
        </div>

        {/* 2-Column Sticky Scroll Container */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Desktop Sticky Experience Visualizer */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Active Company Selector Pill */}
            <div className="p-2 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex gap-2">
              {experienceData.map((exp, idx) => {
                const isActive = activeExpIndex === idx
                return (
                  <button
                    key={exp.id}
                    onClick={() => scrollToExperience(exp.id)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-left transition-all ${
                      isActive
                        ? "bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 shadow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent"
                    }`}
                  >
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      0{idx + 1}
                    </p>
                    <p className="text-xs font-bold truncate">{exp.company.split(" ")[0]}</p>
                  </button>
                )
              })}
            </div>

            {/* Dynamic Technical Visual Panel */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl relative overflow-hidden transition-all duration-500">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Architecture Stack
                  </span>
                  <h4 className="text-sm font-bold text-slate-100">{activeExp.company}</h4>
                </div>
                <Badge variant="primary" className="font-mono text-[10px]">
                  Role 0{activeExpIndex + 1} of 0{experienceData.length}
                </Badge>
              </div>

              {/* State 01: Talentrise Technical Pipeline Visual */}
              {activeExp.id === "talentrise" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-slate-200">Software Development</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">
                      Core Discipline
                    </span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">
                      <p className="text-xs font-bold text-cyan-300">React.js</p>
                      <p className="text-[10px] text-slate-500">Component UI</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">
                      <p className="text-xs font-bold text-blue-300">TypeScript</p>
                      <p className="text-[10px] text-slate-500">Static Contracts</p>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold text-slate-200">REST APIs & Axios</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Interceptors</span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                      <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                      <span>Enterprise Business Dashboards</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["Vendor Workflows", "Telecaller Panels", "Super Admin", "Excel Ingestion"].map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* State 02: Allomor MERN Technical Pipeline Visual */}
              {activeExp.id === "allomor" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Workflow className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-slate-200">MERN Stack Architecture</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                      Full-Stack
                    </span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-slate-200">React.js & Tailwind</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Client Tier</span>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">
                      <p className="text-xs font-bold text-emerald-400">Node.js</p>
                      <p className="text-[10px] text-slate-500">Runtime Engine</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">
                      <p className="text-xs font-bold text-slate-300">Express.js</p>
                      <p className="text-[10px] text-slate-500">REST Routing</p>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-600 text-xs font-mono">↓</div>

                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-emerald-400" />
                      <div>
                        <p className="text-xs font-semibold text-slate-200">MongoDB Database</p>
                        <p className="text-[10px] text-slate-500">CRUD Queries & Collections</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                      Persistent
                    </span>
                  </div>
                </div>
              )}

              {/* Progress Indicator */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Scroll to switch positions</span>
                <span>0{activeExpIndex + 1} / 0{experienceData.length}</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Scrollable Detailed Experience Cards */}
          <div className="lg:col-span-7 space-y-12">
            {experienceData.map((exp, idx) => {
              const isActive = activeExpIndex === idx

              return (
                <div
                  key={exp.id}
                  id={`exp-${exp.id}`}
                  className={`rounded-3xl bg-slate-900/75 border p-6 sm:p-8 transition-all duration-300 shadow-xl ${
                    isActive
                      ? "border-cyan-500/60 shadow-cyan-950/20 ring-1 ring-cyan-500/20"
                      : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                        <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                          0{idx + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                          {exp.role}
                        </h3>
                        <Badge variant="primary">{exp.period}</Badge>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-cyan-400 font-medium mt-1.5 flex-wrap">
                        <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                          <Building className="w-4 h-4 text-cyan-400" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs">{exp.specialization}</span>
                      </div>
                    </div>

                    {/* View Deep Dive Button */}
                    <button
                      onClick={() => setSelectedExp(exp)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-200 text-xs font-semibold border border-slate-700 hover:border-cyan-500 transition-all self-start sm:self-auto group"
                    >
                      <span>View Full Experience</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Role Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed my-6 font-normal">
                    {exp.summary}
                  </p>

                  {/* "What I Worked On" Section */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      Key Contributions & Workflows
                    </h4>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.keyContributions.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Applied */}
                  <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 text-xs font-mono border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>

      {/* Detailed Modal */}
      <ExperienceModal
        isOpen={Boolean(selectedExp)}
        onClose={() => setSelectedExp(null)}
        experience={selectedExp}
      />
    </section>
  )
}

export default Experience
