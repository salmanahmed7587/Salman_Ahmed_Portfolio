const FALLBACK_REPOS = [
  {
    id: 1,
    name: "Salman_Ahmed_Portfolio",
    description: "Production-quality recruiter-focused personal engineering portfolio with AI assistant architecture.",
    language: "JavaScript",
    stargazers_count: 0,
    updated_at: "2026-09-17T00:00:00Z",
    html_url: "https://github.com/salmanahmed7587/Salman_Ahmed_Portfolio",
    topics: ["react", "vite", "tailwind", "portfolio"],
  },
  {
    id: 2,
    name: "Handshake.AI",
    description: "AI-powered collaboration and workflow platform with decoupled microservices and LLM integration.",
    language: "TypeScript",
    stargazers_count: 0,
    updated_at: "2026-09-15T00:00:00Z",
    html_url: "https://github.com/salmanahmed7587",
    topics: ["ai", "react", "typescript", "fullstack"],
  },
  {
    id: 3,
    name: "Wind-Forecast-Dashboard",
    description: "Real-time energy telemetry and forecast dashboard visualizing Elexon BMRS data.",
    language: "JavaScript",
    stargazers_count: 0,
    updated_at: "2026-09-10T00:00:00Z",
    html_url: "https://github.com/salmanahmed7587",
    topics: ["react", "recharts", "tailwind"],
  },
  {
    id: 4,
    name: "Cinema-House",
    description: "Responsive movie discovery and trailer browsing application with live API integration.",
    language: "JavaScript",
    stargazers_count: 0,
    updated_at: "2026-08-20T00:00:00Z",
    html_url: "https://github.com/salmanahmed7587",
    topics: ["react", "rest-api", "responsive"],
  },
]

let memoryCache = null
let cacheTimestamp = 0
const CACHE_TTL_MS = 1000 * 60 * 15 // 15 minutes

export async function fetchGitHubRepos(username = "salmanahmed7587") {
  const now = Date.now()
  if (memoryCache && now - cacheTimestamp < CACHE_TTL_MS) {
    return memoryCache
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 6000)

    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    clearTimeout(timeoutId)

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status}, falling back to curated repo cache`)
      return FALLBACK_REPOS
    }

    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) {
      return FALLBACK_REPOS
    }

    const formatted = data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "Open source project repository.",
      language: repo.language || "JavaScript",
      stargazers_count: repo.stargazers_count,
      updated_at: repo.updated_at,
      html_url: repo.html_url,
      topics: repo.topics || [],
    }))

    memoryCache = formatted
    cacheTimestamp = now
    return formatted
  } catch (err) {
    console.warn("Could not fetch live GitHub repositories, using fallback data:", err)
    return FALLBACK_REPOS
  }
}
