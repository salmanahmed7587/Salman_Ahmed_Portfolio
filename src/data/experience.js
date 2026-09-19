export const experienceData = [
  {
    id: "talentrise",
    company: "Talentrise Technokrate",
    role: "Software Developer Intern",
    specialization: "Frontend & Dashboard Engineering",
    period: "Jun 2026 – Sep 2026 · 3 months",
    duration: "3 months",
    type: "Internship",
    location: "Pune, Maharashtra, India",
    summary:
      "Worked on real-world business applications and management platforms, contributing primarily to frontend development using React.js, TypeScript, Tailwind CSS, and REST APIs.",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Axios",
      "Git",
      "GitHub",
    ],
    keyContributions: [
      "Developed and enhanced responsive dashboards, forms, tables, and reusable UI components.",
      "Built and integrated REST API workflows for business management features.",
      "Worked across Vendor, Telecaller, and Super Admin application modules.",
      "Implemented vendor management, authentication, subscription, and payment-order workflows.",
      "Developed Excel import workflows with upload, preview, validation, and confirmation steps.",
      "Improved form validation, error handling, and user feedback across application workflows.",
      "Used Git and GitHub for version control, feature development, and collaborative development workflows.",
    ],
    modalDetails: {
      overview:
        "Contributed as a Software Developer Intern at Talentrise Technokrate, focusing on enterprise management dashboards and commercial CRM platforms. The role centered on high-fidelity React.js and TypeScript implementation, defensive client-side validation, and structured REST API integration.",
      responsibilities: [
        "Develop and enhance responsive dashboards, forms, tables, and reusable UI components.",
        "Build and integrate REST API workflows for business management features with Axios.",
        "Implement role-based user interfaces across Vendor, Telecaller, and Super Admin modules.",
        "Engineer complete Excel import pipelines with upload, tabular preview, validation, and confirmation.",
        "Collaborate in a Git feature-branch workflow with code reviews and sprint planning.",
      ],
      workflows: [
        {
          title: "Vendor Management Workflows",
          detail:
            "Engineered vendor onboarding portals, profile updates, status tracking, and contract state visualization with real-time UI updates.",
        },
        {
          title: "Telecaller Workflow Engine",
          detail:
            "Created responsive lead-call queue interfaces, disposition logging forms, and activity history tables designed for high data entry speed.",
        },
        {
          title: "Super Admin Control Panel",
          detail:
            "Developed administrative configuration screens, user permission matrices, and platform-wide telemetry analytics modules.",
        },
        {
          title: "Excel Import & Validation Pipeline",
          detail:
            "Implemented end-to-end spreadsheet upload, preview table, schema validation, error highlighting, and batch confirmation workflows.",
        },
        {
          title: "Subscription & Payment Order Workflows",
          detail:
            "Designed checkout and subscription tier selection interfaces with dynamic price breakdown calculations and payment order processing states.",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "Handling Large Dataset Previews in Browser",
          solution:
            "When users uploaded large Excel files for batch imports, rendering hundreds of rows caused DOM lag. Implemented client-side pagination and lightweight preview virtualization to maintain 60 FPS responsiveness.",
        },
        {
          challenge: "Multi-Role Access & UI State Integrity",
          solution:
            "Built modular route wrappers and conditional action triggers based on user role tokens, preventing unauthorized navigation and UI element exposure across Admin, Vendor, and Telecaller portals.",
        },
        {
          challenge: "Standardized API Error Resilience",
          solution:
            "Standardized Axios error responses into user-friendly toast notifications with fallback error states, ensuring operators never faced silent UI failures.",
        },
      ],
      learnings: [
        "Translating complex business workflows into intuitive, resilient user interfaces.",
        "Writing scalable component hierarchies in TypeScript and React that can be extended by team members.",
        "Collaborating across frontend-backend boundaries to establish clean API contracts.",
        "Appreciating production-grade error handling, schema validation, and edge-case management.",
      ],
    },
  },
  {
    id: "allomor",
    company: "Allomor Technologies Pvt Ltd",
    role: "MERN Stack Developer Intern",
    specialization: "Full-Stack Development (MERN)",
    period: "May 2026 – Jul 2026 · 3 months",
    duration: "3 months",
    type: "Full-time Internship · On-site",
    location: "Pune District, Maharashtra, India",
    summary:
      "Contributed to full-stack web application development using the MERN stack, gaining practical experience across frontend, backend, and database development.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    keyContributions: [
      "Developed responsive and user-friendly interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
      "Built RESTful APIs using Node.js and Express.js for client-server communication.",
      "Worked with MongoDB and implemented CRUD operations.",
      "Collaborated with team members on real-world web development projects.",
      "Debugged, tested, and optimized application functionality.",
      "Used Git and GitHub for version control and collaborative development.",
      "Applied modern web development practices while improving understanding of full-stack application architecture.",
    ],
    modalDetails: {
      overview:
        "Functioned as a full-time MERN Stack Developer Intern at Allomor Technologies in Pune. Contributed across the complete application stack, connecting MongoDB data models and Express.js REST routes to dynamic React user interfaces.",
      responsibilities: [
        "Design and construct reusable frontend views and dashboards with React.js and Tailwind CSS.",
        "Architect RESTful HTTP route controllers in Node.js and Express.js.",
        "Model MongoDB collections and write efficient CRUD database queries.",
        "Collaborate in an on-site engineering team on sprint deliverables and code reviews.",
        "Profile, debug, and optimize application responsiveness and client-server payload efficiency.",
      ],
      workflows: [
        {
          title: "Full-Stack MERN Architecture",
          detail:
            "Implemented end-to-end features connecting MongoDB collections to Node/Express REST endpoints and rendering reactive state in React.",
        },
        {
          title: "Database CRUD Operations",
          detail:
            "Designed schemas and implemented transactional create, read, update, and delete queries with input sanitization.",
        },
        {
          title: "RESTful API Development",
          detail:
            "Constructed clean Express route handlers with request body validation, query parameter parsing, and JSON response formatting.",
        },
        {
          title: "Responsive Interface Engineering",
          detail:
            "Built pixel-perfect, accessible client views using Tailwind CSS and modular React functional components.",
        },
      ],
      engineeringChallenges: [
        {
          challenge: "Synchronizing Client State with MongoDB Updates",
          solution:
            "Ensured optimistic or deterministic React state updates upon backend database modifications, preventing stale data flickers.",
        },
        {
          challenge: "API Endpoint Error Handling & Validation",
          solution:
            "Added Express middleware validation guards to catch malformed payloads early before executing MongoDB database operations.",
        },
      ],
      learnings: [
        "Deepened practical understanding of full-stack architecture and data lifecycles from database to browser.",
        "Appreciating the synergy between Express middleware, REST routing, and React state stores.",
        "On-site collaborative development in professional engineering team environments.",
      ],
    },
  },
]
