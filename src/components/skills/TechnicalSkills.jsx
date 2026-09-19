import { useState } from "react"
import { Code2, Server, Database, Brain, Wrench, CheckCircle2 } from "lucide-react"
import { skillsData } from "../../data/skills"
import { Badge } from "../ui/Badge"

export const TechnicalSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const iconMap = {
    frontend: Code2,
    backend: Server,
    database: Database,
    ai: Brain,
    tools: Wrench,
  }

  const filteredCategories =
    selectedCategory === "all"
      ? skillsData.categories
      : skillsData.categories.filter((c) => c.id === selectedCategory)

  const getTierBadgeVariant = (tier) => {
    switch (tier) {
      case "Professional Experience":
        return "primary"
      case "Working Knowledge":
        return "blue"
      default:
        return "purple"
    }
  }

  return (
    <section id="skills" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Verified Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Technical Skills Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
              Transparently tiered by production deployment vs hands-on projects vs active study. No arbitrary percentage bars.
            </p>
          </div>

          {/* Tier Legend */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              Professional Experience
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">
              Working Knowledge
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
              Currently Learning
            </span>
          </div>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-cyan-600 text-white"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            All Categories
          </button>
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.id] || Code2

            return (
              <div
                key={cat.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{cat.title}</h3>
                      <p className="text-xs text-slate-400">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="grid gap-2.5 pt-4 border-t border-slate-800/80">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-200">
                            {skill.name}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{skill.note}</p>
                        </div>
                        <Badge variant={getTierBadgeVariant(skill.tier)} className="shrink-0 self-start sm:self-auto font-mono">
                          {skill.tier}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default TechnicalSkills
