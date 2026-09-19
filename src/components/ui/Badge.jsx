export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    primary: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    rose: "bg-rose-500/10 text-rose-300 border-rose-500/30",
  }

  const selectedVariant = variants[variant] || variants.default

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium border transition-colors ${selectedVariant} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
