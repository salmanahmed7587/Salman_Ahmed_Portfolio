/**
 * AI Assistant Service Interface
 *
 * Designed with a strict security boundary:
 * Client code never makes direct authenticated calls with private LLM API keys.
 *
 * Future Evolution Roadmap:
 * - Stage 1 (Current): Grounded client-side knowledge retrieval engine.
 * - Stage 2: Proxied server-side API route (/api/ai/chat) with server-only env secrets.
 * - Stage 3: Server-side RAG vector database retrieval (Pinecone / pgvector).
 * - Stage 4: Tool-calling dispatcher with schema validation.
 */
import { streamPortfolioResponse } from "./assistantEngine"

export async function sendChatMessage({
  message,
  history = [],
  onChunk,
  signal,
  backendEndpoint = null, // Set to '/api/ai/chat' when a dedicated server is deployed
}) {
  // If a server endpoint is configured and reachable, proxy to it
  if (backendEndpoint) {
    try {
      const response = await fetch(backendEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
        signal,
      })

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`)
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        accumulated += chunk
        onChunk(accumulated)
      }

      return accumulated
    } catch (err) {
      if (err.name === "AbortError") throw err
      console.warn("Backend AI route unavailable, falling back to local grounded knowledge engine:", err)
      // Graceful fallback to verified client knowledge engine
    }
  }

  // Default Stage 1: Fast, deterministic, grounded local assistant
  return new Promise((resolve, reject) => {
    streamPortfolioResponse(
      message,
      (chunk) => onChunk(chunk),
      (finalText) => resolve(finalText),
      signal
    ).catch(reject)
  })
}
