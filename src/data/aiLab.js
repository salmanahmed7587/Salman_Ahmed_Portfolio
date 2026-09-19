export const aiLabData = [
  {
    id: "llm-apps",
    title: "LLM Applications & Streaming",
    icon: "Sparkles",
    status: "Building",
    statusVariant: "building", // 'learning' | 'experimenting' | 'building' | 'implemented'
    whatItIs:
      "Integrating Large Language Model APIs (e.g., OpenAI, Anthropic, Gemini) into web frontends using streaming completion protocols (Server-Sent Events / chunked HTTP).",
    whatSalmanIsBuilding:
      "Implementing resilient streaming response UI with markdown parsing, token buffering, and client-side abort controllers in Handshake.AI.",
    exampleProject: "Handshake.AI (Streaming Chat Module)",
  },
  {
    id: "rag",
    title: "RAG (Retrieval-Augmented Generation)",
    icon: "Database",
    status: "Experimenting",
    statusVariant: "experimenting",
    whatItIs:
      "A pattern that grounds LLM outputs in verified external knowledge by retrieving relevant document chunks from a vector database before prompting the model.",
    whatSalmanIsBuilding:
      "Prototyping vector embedding ingestion, similarity search, and context prompt injection pipelines for project documentation and resume answering.",
    exampleProject: "Ask My Portfolio Assistant (Architecture Stage 3)",
  },
  {
    id: "ai-agents",
    title: "AI Agents & Autonomous Loops",
    icon: "Bot",
    status: "Learning",
    statusVariant: "learning",
    whatItIs:
      "Systems where an LLM functions as a reasoning core, deciding sequential actions, observing tool outputs, and iteratively working toward a defined goal.",
    whatSalmanIsBuilding:
      "Studying ReAct (Reason + Act) agent loops, planning strategies, short-term memory management, and guardrails to prevent infinite recursion.",
    exampleProject: "CRM Lead Automation Blueprint",
  },
  {
    id: "tool-calling",
    title: "Structured Tool Calling",
    icon: "Wrench",
    status: "Experimenting",
    statusVariant: "experimenting",
    whatItIs:
      "Enabling an LLM to emit strictly typed JSON payloads targeting client-side or server-side functions (e.g., querying databases, fetching live weather, executing calculations).",
    whatSalmanIsBuilding:
      "Defining JSON schemas for portfolio query tools (`searchProjects()`, `getExperience()`, `getSkills()`) with client validation and error bounds.",
    exampleProject: "Portfolio Assistant Tool Calling Architecture",
  },
  {
    id: "ai-automation",
    title: "AI Business Automation",
    icon: "Workflow",
    status: "Learning",
    statusVariant: "learning",
    whatItIs:
      "Automating repetitive commercial workflows (email drafting, data categorization, lead qualification) through targeted prompt chains.",
    whatSalmanIsBuilding:
      "Designing asynchronous background task pipelines that extract actionable tasks from raw unstructured meeting or customer call notes.",
    exampleProject: "AI Business / CRM Platform Concept",
  },
  {
    id: "semantic-search",
    title: "AI-Powered Semantic Search",
    icon: "Search",
    status: "Learning",
    statusVariant: "learning",
    whatItIs:
      "Replacing traditional keyword matching with vector embeddings to match user intent and conceptual meaning across unstructured data.",
    whatSalmanIsBuilding:
      "Exploring cosine similarity algorithms and embedding models to enable natural language queries across CRM records and document catalogs.",
    exampleProject: "Knowledge Retriever Experiments",
  },
]
