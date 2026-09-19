import { useState } from "react"
import { ExternalLink, Sparkles, Layers, ArrowRight, ShieldCheck, ChevronDown, ChevronUp, Cpu } from "lucide-react"
import { Github } from "../ui/Icons"
import { Badge } from "../ui/Badge"
import { ArchitectureDiagram } from "./ArchitectureDiagram"

export const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [showArch, setShowArch] = useState(false)

  const isHandshake = project.id === "handshake-ai"
  const isCrm = project.id === "ai-crm-platform"
  const isLocalTrade = project.id === "local-trade-street"

  // Status badge styling helper
  const renderStatusBadge = () => {
    if (project.statusVariant === "in-progress") {
      return (
        <Badge variant="primary" className="font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {project.status}
        </Badge>
      )
    }
    if (project.statusVariant === "planned") {
      return (
        <Badge variant="purple" className="font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          {project.status}
        </Badge>
      )
    }
    return (
      <Badge variant="emerald" className="font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        {project.status}
      </Badge>
    )
  }

  // 1. Dominant Flagship Layout (Handshake.AI)
  if (isHandshake) {
    return (
      <div className="rounded-3xl bg-slate-900/80 border-2 border-cyan-500/40 p-6 sm:p-10 shadow-2xl shadow-cyan-950/20 relative overflow-hidden group">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Flagship Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                FLAGSHIP AI PROJECT
              </span>
              {renderStatusBadge()}
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-cyan-400 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950/60 text-slate-500 border border-slate-800 text-xs font-mono">
                Live Demo: Deployment in Progress
              </span>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed my-6">
          {project.description}
        </p>

        {/* Core Stack + Planned AI Stack */}
        <div className="grid sm:grid-cols-2 gap-4 pb-6 border-b border-slate-800/80">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Implemented Technical Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2">
              Planned AI Architecture (In Development)
            </p>
            <div className="flex flex-wrap gap-2">
              {project.plannedAiTechnologies.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-purple-950/40 text-xs font-mono text-purple-300 border border-purple-800/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Toggles: Details & Architecture */}
        <div className="pt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            <span>{showDetails ? "Hide Project Breakdown" : "View Problem & Solution"}</span>
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowArch(!showArch)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30 transition-colors"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>{showArch ? "Hide Architecture Diagram" : "Inspect System Architecture"}</span>
          </button>
        </div>

        {/* Expandable Problem & Solution Section */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-slate-800/80 grid sm:grid-cols-2 gap-6 animate-in fade-in duration-200">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-2">
                Problem Space
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.details.problem}
              </p>
              <div className="mt-3 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Target Users: </span>
                {project.details.targetUsers}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">
                Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.details.solution}
              </p>
              <div className="mt-3">
                <p className="text-xs font-semibold text-slate-300 mb-1.5">Current UI Scaffolding:</p>
                <ul className="space-y-1 text-xs text-slate-400">
                  {project.details.currentFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Expandable Architecture Diagram */}
        {showArch && (
          <div className="mt-6 pt-6 border-t border-slate-800/80 animate-in fade-in duration-300">
            <ArchitectureDiagram />
          </div>
        )}

      </div>
    )
  }

  // 2. AI Business / CRM Platform Card (Planned)
  if (isCrm) {
    return (
      <div className="rounded-2xl bg-slate-900/60 border border-purple-900/40 p-6 sm:p-8 hover:border-purple-600/40 transition-all flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            {renderStatusBadge()}
            <span className="text-[11px] font-mono text-purple-400">Architecture Concept</span>
          </div>

          <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-cyan-400 font-medium mb-3">{project.subtitle}</p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Planned modules checklist */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 mb-4">
            <p className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-2">
              Planned AI Modules:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              {project.details.plannedModules.map((m, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span className="text-slate-300 font-medium">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
            <span className="text-slate-500 font-mono">Future Roadmap</span>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  // 3. Local Trade Street (Professional Internship Showcase)
  if (isLocalTrade) {
    return (
      <div className="rounded-2xl bg-slate-900/60 border border-cyan-900/40 p-6 sm:p-8 hover:border-cyan-600/40 transition-all flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            {renderStatusBadge()}
            <span className="text-[11px] font-mono text-cyan-400">Internship Project</span>
          </div>

          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-cyan-400 font-medium mb-3">{project.subtitle}</p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Focus highlights */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 mb-4 space-y-1.5">
            <p className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">
              Engineered Workflows:
            </p>
            {project.details.focusAreas.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] text-slate-500 flex items-center gap-2 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Commercial code protected under NDA.</span>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
            <span className="text-slate-400 font-mono">Talentrise Technokrate</span>
            <a
              href="#experience"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View Experience Record</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  // 4. Standard Live Project Card
  return (
    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {renderStatusBadge()}
          <span className="text-[11px] font-mono text-slate-500">Verified Project</span>
        </div>

        <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mb-3">{project.subtitle}</p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
