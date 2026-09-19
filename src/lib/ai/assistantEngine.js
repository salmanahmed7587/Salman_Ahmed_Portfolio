import { experienceData } from "../../data/experience"
import { projectsData } from "../../data/projects"

export const SUGGESTED_QUESTIONS = [
  "What did Salman work on during his internship?",
  "Tell me about Handshake.AI.",
  "What React experience does Salman have?",
  "What technologies has he used?",
  "Show me his AI projects.",
  "What kind of developer is Salman?",
  "Show me projects involving APIs.",
  "Summarize his professional experience.",
]

/**
 * Stage 1 Grounded Knowledge Base Engine:
 * Formulates accurate, factual responses based strictly on Salman's real profile,
 * experience, verified projects, and skills. Never invents facts.
 */
export function queryPortfolioKnowledge(userQuery) {
  const query = userQuery.toLowerCase().trim()

  // 1. Greetings
  if (
    query === "hi" ||
    query === "hello" ||
    query === "hey" ||
    query.startsWith("hi ") ||
    query.startsWith("hello ") ||
    query.startsWith("hey ") ||
    query.includes("greetings") ||
    query.includes("good morning") ||
    query.includes("good afternoon") ||
    query.includes("good evening") ||
    query.includes("howdy") ||
    query.includes("hola")
  ) {
    return `Hello! 👋 I am Salman's **Portfolio Assistant**. I am here to help you explore his commercial internships, flagship AI project (Handshake.AI), verified technical stack, and software engineering background.

**Here are some questions you can ask me:**
- *What did Salman work on during his internship?*
- *Tell me about Handshake.AI.*
- *What React & MERN experience does Salman have?*
- *What technologies has he used?*
- *How can I contact Salman?*

What would you like to explore?`
  }

  // 2. Internship & Professional Experience questions
  if (
    query.includes("internship") ||
    query.includes("talentrise") ||
    query.includes("allomor") ||
    query.includes("mern") ||
    query.includes("work on") ||
    query.includes("worked on") ||
    query.includes("professional experience") ||
    query.includes("work experience")
  ) {
    return `### Professional Experience (${experienceData.length} Commercial Roles)

Salman has completed **two verified software developer internships** in Pune, Maharashtra:

1. **Software Developer Intern at Talentrise Technokrate** (Jun 2026 – Sep 2026 · 3 months):
   - Contributed primarily to frontend development using **React.js**, **TypeScript**, **Tailwind CSS**, and **REST APIs**.
   - Developed responsive dashboards, forms, tables, and reusable UI components across Vendor, Telecaller, and Super Admin modules.
   - Implemented vendor management, authentication, dynamic subscription, and payment-order workflows.
   - Built complete Excel import pipelines with upload, preview, validation, and confirmation steps.
   - Handled form validation, error boundaries, and toast notifications.

2. **MERN Stack Developer Intern at Allomor Technologies Pvt Ltd** (May 2026 – Jul 2026 · 3 months · On-site):
   - Full-stack web application development using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).
   - Developed responsive interfaces with React.js, JavaScript, and Tailwind CSS.
   - Built RESTful APIs in Node.js and Express.js for client-server communication.
   - Implemented database schemas and CRUD operations using MongoDB.
   - Conducted debugging, functional testing, and full-stack performance optimization in a collaborative Git workflow.`
  }

  // 3. Handshake.AI / Flagship questions
  if (query.includes("handshake") || query.includes("flagship")) {
    const handshake = projectsData.find((p) => p.id === "handshake-ai")
    return `### Flagship Project: Handshake.AI (${handshake ? handshake.status : "Active Development"})

**Handshake.AI** is Salman's active independent project (2026 – Present) focusing on full-stack development and AI-powered applications.

**Key Technical Details:**
- **Status**: Independent Project · Active Development (2026 – Present).
- **Core Focus Areas**: Full-Stack Development · React.js · TypeScript · AI/LLM Integration · API Development · Product Architecture.
- **Current Stack**: React.js, TypeScript, Tailwind CSS, Node.js, Express.js, REST APIs.
- **Decoupled Architecture**:
  \`User ➔ React Frontend ➔ Node.js API Gateway ➔ Database (PostgreSQL) ➔ AI Layer ➔ LLM Services\`
- **Planned AI Capabilities**: Contextual meeting synthesis via LLM APIs, RAG over workspace documents, and tool-calling workflow agents.

*(Note: Advanced AI features like RAG and autonomous agents are transparently marked as planned/in development).*`
  }

  // 4. React & Frontend questions
  if (query.includes("react") || query.includes("frontend") || query.includes("ui")) {
    return `### React.js & Frontend Depth

Salman specializes in **React.js and modern frontend engineering**:

- **Real Production Experience**: Developed multi-tier dashboard applications during his internships at Talentrise Technokrate and Allomor Technologies.
- **Core React Patterns**: Proficient in functional components, React Hooks (\`useState\`, \`useEffect\`, \`useMemo\`, \`useCallback\`), Context API, and Redux Toolkit.
- **Styling**: Advanced proficiency with **Tailwind CSS**, including responsive breakpoints, dark themes, and subtle micro-interactions.
- **Data Fetching & State**: Experienced in Axios interceptors, REST API lifecycle, loading states, error boundaries, and client-side caching.
- **TypeScript Integration**: Commercial experience applying static types, interfaces, and generics to React component props and API contracts.`
  }

  // 5. AI Work & Projects questions
  if (query.includes("ai") || query.includes("rag") || query.includes("agent") || query.includes("llm")) {
    return `### AI Capabilities & Roadmap

Salman's career direction is **Full-Stack Development + AI-Powered Applications**:

1. **Flagship Project — Handshake.AI**:
   - Active personal build combining clean React UI with a planned LLM/RAG service layer.
2. **AI Business / CRM Platform**:
   - Planned architecture incorporating AI summaries, natural language record search, and automated follow-ups.
3. **AI Lab Status**:
   - **LLM Applications & Streaming**: Active Building (markdown streaming UI, token buffering).
   - **Structured Tool Calling**: Active Experimentation (JSON schemas for portfolio query tools).
   - **RAG (Retrieval-Augmented Generation)**: Experimenting with embedding chunking and vector storage concepts.
   - **AI Agents**: Learning ReAct loops and autonomous task orchestration.

*Salman explicitly categorizes AI technologies as 'Currently Learning' or 'Experimenting' to represent genuine competence without inflated claims.*`
  }

  // 6. Technologies & Stack questions
  if (
    query.includes("technolog") ||
    query.includes("stack") ||
    query.includes("skill") ||
    query.includes("node") ||
    query.includes("express") ||
    query.includes("mongodb") ||
    query.includes("typescript")
  ) {
    return `### Technical Skills Categorization

Salman’s stack is strictly split by verified exposure:

- **Professional Experience (Shipped in commercial production/internships):**
  - React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Node.js, Express.js, MongoDB, Context API, Redux Toolkit, REST APIs, Axios, Git & GitHub, HTML5/CSS3.
- **Working Knowledge (Built in personal projects/coursework):**
  - PostgreSQL, MySQL.
- **Currently Learning / Expanding:**
  - Next.js (SSR/App Router), LLM APIs, RAG Pipelines, AI Agents, Tool Calling, Cloud/DevOps.

*No arbitrary percentage bars — skills are presented with engineering evidence.*`
  }

  // 7. Projects & Demos
  if (query.includes("project") || query.includes("projects") || query.includes("demo") || query.includes("builds")) {
    return `### Featured Projects Overview

Salman has built and contributed to several full-stack and frontend projects:

1. **Handshake.AI** (Flagship · Active Development):
   - AI-powered collaboration and workflow platform built with React, TypeScript, Node.js, and Express.
2. **AI Business / CRM Platform** (Planned):
   - Conceptual AI-driven customer relationship management application.
3. **Local Trade Street Management Suite** (Commercial Internship Work):
   - Enterprise dashboard modules (Vendor, Telecaller, Super Admin, Excel import workflows).
4. **Wind Generation Forecast Dashboard** (Live Production Demo):
   - Real-time energy telemetry dashboard consuming Elexon BMRS REST API.
5. **Fenrir Security Interface** (Live UI/UX):
   - Dark-mode cybersecurity vulnerability assessment platform design.
6. **Cinema House** (Live Movie Browser):
   - Movie discovery application consuming third-party REST APIs.
7. **Book Inventory App** (Live CRUD App):
   - Collection manager with local persistence and responsive state.`
  }

  // 8. Projects with APIs
  if (query.includes("api") || query.includes("apis") || query.includes("rest") || query.includes("axios")) {
    return `### Projects & Work Involving APIs

Salman has extensive hands-on experience designing and consuming REST APIs across multiple applications:

1. **Talentrise Technokrate & Allomor Technologies**:
   - Built Express.js REST APIs and integrated frontend Axios interceptors for CRM, vendor onboarding, telecaller queues, Excel file parsing, and subscription checkouts.
2. **Wind Generation Forecast Dashboard**:
   - Live production dashboard integrating real-time UK energy telemetry from the **Elexon BMRS REST API**.
3. **Cinema House**:
   - Responsive movie discovery app consuming external entertainment REST APIs.
4. **Handshake.AI**:
   - Full-stack API architecture designed with Node.js/Express to handle user sessions and downstream LLM streaming endpoints.`
  }

  // 9. Education / College / Degree
  if (query.includes("education") || query.includes("bca") || query.includes("degree") || query.includes("college") || query.includes("university")) {
    return `### Academic Background

Salman holds a **Bachelor of Computer Applications (BCA)**:

- **Degree**: Bachelor of Computer Applications (BCA)
- **Graduation Year**: 2024
- **Institution**: Sant Gadge Baba Amravati University
- **Score**: 67.42%
- **Higher Secondary Certificate (12th)**: Maharashtra State Board (83.00%)
- **Secondary School Certificate (10th)**: Maharashtra State Board (65.60%)`
  }

  // 10. Developer identity / Bio
  if (query.includes("who is") || query.includes("kind of developer") || query.includes("about salman") || query.includes("bio")) {
    return `### Who is Salman Ahmed?

**Salman Ahmed** is a **Software Developer** focused on React.js, Full-Stack Development (MERN), and AI-powered applications based in Pune, Maharashtra, India.

- **Education**: Bachelor of Computer Applications (BCA, 2024).
- **Commercial Experience**: Completed two software developer internships (Talentrise Technokrate & Allomor Technologies) building commercial management dashboards and full-stack applications.
- **Engineering Philosophy**: Evidence-over-claims. He values clean component composition, solid state boundaries, defensive error handling, and robust business workflows over superficial UI gimmicks.
- **Current Ambition**: Actively building AI-infused software (starting with Handshake.AI) while seeking full-time Software Developer roles.`
  }

  // 11. Contact & Hiring questions
  if (query.includes("contact") || query.includes("hire") || query.includes("email") || query.includes("phone") || query.includes("resume") || query.includes("linkedin") || query.includes("github")) {
    return `### How to Contact Salman

Salman is currently available for Software Developer / Frontend / Full-Stack / MERN roles:

- **Email**: [salmanahmed7587@gmail.com](mailto:salmanahmed7587@gmail.com)
- **Phone / WhatsApp**: [+91 9359847587](tel:+919359847587)
- **GitHub**: [github.com/salmanahmed7587](https://github.com/salmanahmed7587)
- **LinkedIn**: [linkedin.com/in/salmanahmed7587](https://www.linkedin.com/in/salmanahmed7587/)
- **Resume**: You can download his resume directly via the *Download Resume* button in the hero or footer.

You can also use the contact form at the bottom of this portfolio to send a direct message.`
  }

  // Fallback grounded answer
  return `### Portfolio Assistant Response

Thank you for asking! Here is a summary of Salman Ahmed's verified background:

- **Role**: Software Developer (React.js, MERN Full-Stack & AI Direction).
- **Core Background**: Two commercial developer internships in Pune — **Talentrise Technokrate** (React.js/TypeScript dashboards & CRM) and **Allomor Technologies** (MERN Full-Stack, Node.js, Express, MongoDB).
- **Education**: Bachelor of Computer Applications (BCA, 2024).
- **Flagship Project**: **Handshake.AI** (Active independent build, decoupled architecture with planned LLM/RAG integration).
- **Primary Skills**: React.js, TypeScript, JavaScript (ES6+), Node.js, Express.js, MongoDB, Tailwind CSS, REST APIs.

*Try asking: "What did Salman work on during his internship?", "Tell me about Handshake.AI", or "What React experience does he have?"*`
}

/**
 * Simulates a realistic token-by-token streaming response
 * for client-side execution without exposing external API keys.
 */
export async function streamPortfolioResponse(query, onChunk, onDone, signal) {
  const fullText = queryPortfolioKnowledge(query)
  const words = fullText.split(" ")
  let accumulated = ""

  for (let i = 0; i < words.length; i++) {
    if (signal?.aborted) {
      return
    }
    accumulated += (i > 0 ? " " : "") + words[i]
    onChunk(accumulated)
    // Dynamic delay for realistic typing cadence
    const delay = Math.min(25, Math.max(8, Math.floor(Math.random() * 20)))
    await new Promise((resolve) => setTimeout(resolve, delay))
  }

  onDone(accumulated)
}
