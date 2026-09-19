import { useEffect } from "react"
import { X } from "lucide-react"

export const Modal = ({ isOpen, onClose, title, subtitle, children, maxWidth = "max-w-3xl" }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${maxWidth} bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200`}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800/80 mb-6 shrink-0">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">{title}</h3>
            {subtitle && <p className="text-sm text-cyan-400 mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="overflow-y-auto pr-1 space-y-6 flex-grow">{children}</div>
      </div>
    </div>
  )
}

export default Modal
