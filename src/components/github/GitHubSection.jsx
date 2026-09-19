import { useState, useEffect } from "react"
import { Star, GitFork, ExternalLink, Calendar, RefreshCw } from "lucide-react"
import { Github } from "../ui/Icons"
import { fetchGitHubRepos } from "../../lib/github/fetchRepos"
import { profileData } from "../../data/profile"

export const GitHubSection = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    fetchGitHubRepos("salmanahmed7587").then((data) => {
      if (isMounted) {
        setRepos(data)
        setLoading(false)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="github" className="py-24 bg-slate-950/80 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <Github className="w-3.5 h-3.5" />
              Open Source & Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              GitHub Activity
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
              Curated public repositories, open codebases, and experimental tools developed by Salman.
            </p>
          </div>

          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium transition-colors self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit @salmanahmed7587</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Loading Skeletons */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-44 rounded-2xl bg-slate-900/40 border border-slate-800/60 animate-pulse p-6"
              />
            ))}
          </div>
        ) : (
          /* Repositories Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="truncate max-w-[200px]">{repo.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {repo.language || "Code"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  </div>

                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default GitHubSection
