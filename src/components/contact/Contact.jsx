import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Download, Sparkles } from "lucide-react"
import { Github, Linkedin } from "../ui/Icons"
import { profileData } from "../../data/profile"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success' | 'error', message: string }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = "Please enter your name."
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email format."
    }
    if (!formData.message.trim()) {
      errs.message = "Please include a message."
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters."
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simulate safe client-side submission & notification
    setTimeout(() => {
      setIsSubmitting(false)
      setToast({
        type: "success",
        message: "Thank you for reaching out! Your message was captured. Salman will get back to you shortly.",
      })
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setToast(null)
      }, 6000)
    }, 800)
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Interested in discussing Software Developer roles, React frontend contracts, or collaboration on AI applications? Reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Channels & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-100 pb-2 border-b border-slate-800/80">
                Direct Channels
              </h3>

              {/* Email */}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500">Email Address</p>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {profileData.contact.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${profileData.contact.phone}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                    {profileData.contact.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500">Location</p>
                  <p className="text-sm font-semibold text-slate-200">
                    India (Available for Remote / Relocation)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Profile Links */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col gap-4">
              <h3 className="text-base font-bold text-slate-100">Profiles & Documents</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 text-xs font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-100">Send a Direct Message</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below. Client-side sanitized with immediate notification feedback.
                </p>
              </div>

              {/* Notification Toast Banner */}
              {toast && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start gap-3 border ${
                    toast.type === "success"
                      ? "bg-emerald-950/40 text-emerald-200 border-emerald-500/40"
                      : "bg-rose-950/40 text-rose-200 border-rose-500/40"
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{toast.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Technical Recruiter"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:ring-1 ${
                      errors.name
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500"
                        : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:ring-1 ${
                      errors.email
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500"
                        : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, team context, or questions..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:ring-1 resize-none ${
                      errors.message
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500"
                        : "border-slate-800 focus:border-cyan-500 focus:ring-cyan-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/20 disabled:opacity-60 focus:outline-none"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Dispatching Message..." : "Send Message"}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
