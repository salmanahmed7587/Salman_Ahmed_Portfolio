export const engineeringDecisions = [
  {
    id: "why-react",
    question: "Why React.js as the core UI foundation?",
    category: "Frontend Architecture",
    summary:
      "Component reusability, mature ecosystem, virtual DOM performance, and predictable unidirectional data flow.",
    details:
      "React's declarative component model allows complex enterprise interfaces (such as multi-role dashboards and multi-step Excel upload pipelines) to be decomposed into small, testable, and isolated units. With React 19 and modern Hooks, state logic can be extracted into reusable custom hooks without polluting the view layer.",
  },
  {
    id: "why-typescript",
    question: "Why introduce TypeScript into frontend applications?",
    category: "Code Quality & Reliability",
    summary:
      "Compile-time type safety, automated contract alignment with backend schemas, and superior refactoring velocity.",
    details:
      "In data-dense applications with complex API responses, JavaScript's dynamic nature introduces risks of undefined property access at runtime. TypeScript enforces strict contracts across components, props, and API payloads, catching contract mismatches early during build time rather than in production.",
  },
  {
    id: "why-postgresql",
    question: "Why choose PostgreSQL for structured application data?",
    category: "Data Modeling",
    summary:
      "ACID compliance, robust relational integrity, rich JSONB support, and mature ecosystem support.",
    details:
      "For business applications with user permissions, subscriptions, and relational entities (e.g., vendors, telecallers, leads), strong foreign key constraints and transactional integrity are mandatory to prevent orphan records. PostgreSQL also supports indexing and JSONB columns, offering flexibility when semi-structured metadata needs to be stored alongside relational tables.",
  },
  {
    id: "why-rest-apis",
    question: "Why standardize on REST APIs for frontend-backend communication?",
    category: "API Architecture",
    summary:
      "Predictable HTTP verbs, universal browser compatibility, native caching headers, and straightforward status codes.",
    details:
      "RESTful architecture provides a battle-tested, intuitive contract for standard CRUD operations and multi-tier systems. It aligns cleanly with Axios interceptors for global authentication token injection, automated token refresh, and standardized error handling across all dashboard views.",
  },
  {
    id: "why-rag",
    question: "Why adopt RAG (Retrieval-Augmented Generation) instead of fine-tuning?",
    category: "AI Engineering",
    summary:
      "Drastically cheaper, allows instant knowledge updates without model retraining, and provides traceable source attribution.",
    details:
      "Fine-tuning an LLM bakes knowledge directly into static model weights, which is expensive, suffers from catastrophic forgetting, and cannot be updated dynamically without retraining. RAG decouples knowledge storage from model reasoning by fetching relevant context chunks at runtime and feeding them into the prompt, ensuring the model's responses remain grounded in verified source facts.",
  },
  {
    id: "api-keys-security",
    question: "How are API keys and secrets protected from client-side exposure?",
    category: "Security Engineering",
    summary:
      "Server-side proxy routes, environment variables isolated behind the backend, and zero client bundling.",
    details:
      "Third-party API keys (especially LLM provider tokens) must never be injected into client-side Vite/React bundles where anyone can inspect them via browser DevTools. Instead, the frontend calls an internal server route (e.g., `/api/ai/chat`), which verifies the user session, applies rate limiting, and securely attaches the private server-only API key before proxying the request to the upstream service.",
  },
  {
    id: "auth-architecture",
    question: "How is authentication and role-based access handled safely?",
    category: "Security & State",
    summary:
      "HTTP-only cookies or short-lived JWT tokens, Axios interceptors, and route-level authorization guards.",
    details:
      "Protected routes check token validity before mounting restricted views. In the client, an Axios interceptor attaches the authorization header to outgoing requests. If a `401 Unauthorized` or `403 Forbidden` response is returned, the interceptor cleanly triggers a session logout and redirects the user to the login flow with an informative toast message.",
  },
  {
    id: "reducing-hallucinations",
    question: "How are AI hallucinations reduced in production workflows?",
    category: "AI Reliability",
    summary:
      "Strict system prompt boundaries, temperature tuning (0.0 - 0.2), schema enforcement, and fallback refusal protocols.",
    details:
      "Hallucinations are minimized by providing an explicit negative constraint in the system prompt ('If the information is not present in the provided context, state that you do not know rather than assuming'). For factual query tasks, temperature is kept near zero, and outputs are constrained to structured JSON schemas using tool-calling specifications.",
  },
]
