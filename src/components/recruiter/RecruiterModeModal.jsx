import { CheckCircle2, Download, ExternalLink, Mail, Phone, Sparkles, Building, Briefcase } from "lucide-react"
import { Github, Linkedin } from "../ui/Icons"
import { Modal } from "../ui/Modal"
import { Badge } from "../ui/Badge"
import { profileData } from "../../data/profile"
import { experienceData } from "../../data/experience"
import { projectsData } from "../../data/projects"

export const RecruiterModeModal = ({ isOpen, onClose }) => {
  const flagship = projectsData.find((p) => p.isFlagship)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Recruiter Fast-Track Dossier"
      subtitle="30-second candidate summary & engineering credentials"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6 text-sm text-slate-300">
        
        {/* Recruiter Value Banner */}
        <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900 border border-cyan-500/30">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            Recruiter Match Overview
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-2">
            {profileData.recruiterSnapshot.headline}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Salman is an entry-to-junior Software Developer with verified commercial React.js internship experience building complex business dashboards, combining strong UI component foundations with active full-stack and AI application engineering.
          </p>
        </div>

        {/* Quick Credentials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {profileData.recruiterSnapshot.highlights.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <p className="text-[11px] font-mono text-slate-500 mb-1 uppercase">{item.label}</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-200">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Verified Professional Experience */}
        <div className="space-y-3">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            Commercial Internship Experience ({experienceData.length} Roles)
          </p>
          {experienceData.map((expItem) => (
            <div key={expItem.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-slate-100">{expItem.company}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs text-slate-300 font-medium">{expItem.role}</span>
                </div>
                <Badge variant="primary">{expItem.period}</Badge>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {expItem.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {expItem.technologies.slice(0, 6).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flagship Project Highlight */}
        {flagship && (
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-slate-100">{flagship.title}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {flagship.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{flagship.subtitle}</p>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {flagship.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Core Stack Breakdown */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Production & Working Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Context API", "Axios", "REST APIs", "Git/GitHub", "Node.js", "Express", "PostgreSQL"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <p className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              Active Learning & AI Direction
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Next.js (SSR)", "LLM APIs", "RAG Pipelines", "AI Agents", "Tool Calling", "Vector DBs", "Cloud / DevOps"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-purple-950/30 border border-purple-800/40 text-xs text-purple-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons for Recruiters */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact via Email</span>
            </a>

            <a
              href={`tel:${profileData.contact.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>{profileData.contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download Resume</span>
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 text-xs font-medium transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </Modal>
  )
}

export default RecruiterModeModal
