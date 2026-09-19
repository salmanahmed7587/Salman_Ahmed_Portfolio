import { useState, useRef, useEffect } from "react"
import { Bot, Send, Trash2, Sparkles, RefreshCw, User, ShieldCheck, Terminal } from "lucide-react"
import { SUGGESTED_QUESTIONS } from "../../lib/ai/assistantEngine"
import { sendChatMessage } from "../../lib/ai/apiInterface"

export const AskMyPortfolio = () => {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I am Salman's **Portfolio Assistant**. I can answer questions about his 3-month React.js internship at Talentrise Technokrate, his active flagship project (Handshake.AI), verified technical skills, and software engineering decisions. What would you like to explore?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentStreamingText, setCurrentStreamingText] = useState("")
  const chatBottomRef = useRef(null)
  const abortControllerRef = useRef(null)

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, currentStreamingText])

  const handleSend = async (textToSend) => {
    const query = textToSend || inputValue
    if (!query.trim() || isLoading) return

    setInputValue("")
    const userMessage = { id: Date.now().toString(), role: "user", content: query }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setCurrentStreamingText("")

    abortControllerRef.current = new AbortController()

    try {
      let responseText = ""
      await sendChatMessage({
        message: query,
        history: messages,
        onChunk: (chunk) => {
          responseText = chunk
          setCurrentStreamingText(chunk)
        },
        signal: abortControllerRef.current.signal,
      })

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: responseText || "No response generated.",
        },
      ])
      setCurrentStreamingText("")
    } catch (err) {
      if (err.name !== "AbortError") {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: "Sorry, an error occurred while processing your query. Please try again.",
          },
        ])
      }
    } finally {
      setIsLoading(false)
      setCurrentStreamingText("")
    }
  }

  const handleClearHistory = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Chat history cleared. You can ask anything about Salman's verified experience, projects, or technical skills.",
      },
    ])
    setCurrentStreamingText("")
    setIsLoading(false)
  }

  return (
    <section id="ai-assistant" className="py-24 bg-slate-950/80 border-b border-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Portfolio Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
            Ask My Portfolio
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Ask factual questions about Salman’s real experience, code decisions, and projects. Strictly grounded in verified data with zero hallucinations.
          </p>
        </div>

        {/* Assistant Card Container */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[620px]">
          
          {/* Assistant Header Bar */}
          <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-100">Salman's Portfolio Agent</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Grounded Knowledge v1.0
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Answers derived exclusively from verified facts</p>
              </div>
            </div>

            <button
              onClick={handleClearHistory}
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-900 transition-colors"
              title="Clear chat history"
              aria-label="Clear chat history"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono ${
                    msg.role === "user"
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800 text-cyan-400 border border-slate-700"
                  }`}
                >
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed border ${
                    msg.role === "user"
                      ? "bg-cyan-950/40 text-cyan-100 border-cyan-500/40 rounded-tr-none"
                      : "bg-slate-950/70 text-slate-200 border-slate-800 rounded-tl-none space-y-2 whitespace-pre-wrap"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Currently Streaming Message */}
            {isLoading && (
              <div className="flex gap-3 max-w-3xl mr-auto">
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-cyan-400 border border-slate-700 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl text-xs sm:text-sm leading-relaxed bg-slate-950/70 text-slate-200 border border-cyan-500/30 rounded-tl-none whitespace-pre-wrap">
                  {currentStreamingText ? (
                    currentStreamingText
                  ) : (
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Retrieving portfolio facts...</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Suggested Prompts Bar */}
          <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto scrollbar-none flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase text-slate-500 shrink-0">Try:</span>
            {SUGGESTED_QUESTIONS.slice(0, 4).map((q, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-slate-700 whitespace-nowrap transition-colors disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend(inputValue)
            }}
            className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Salman's experience, React projects, or stack..."
              disabled={isLoading}
              className="flex-grow px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white transition-colors disabled:opacity-50 disabled:hover:bg-cyan-600 focus:outline-none"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

        {/* Security & RAG Evolution Notice */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 px-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero API Key Exposure: Secure architecture ready for backend RAG & Tool Calling.</span>
          </div>
          <span className="font-mono">Pipeline: Portfolio Docs ➔ Grounded Retrieval ➔ Token Stream</span>
        </div>

      </div>
    </section>
  )
}

export default AskMyPortfolio
