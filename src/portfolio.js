const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://monwe-jr.github.io/portfolio",
  title: "FM.",
};

const about = {
  name: "Francis Monwe",
  role: "Software Engineer",
  picture: "https://avatars.githubusercontent.com/u/85851001?v=4",
  description: `Software engineer focused on reliability and performance, from low-level firmware to full-stack systems.`,
};

const education = {
  school: "Brock University",
  degree: "B.Sc. (Honours) in Computer Science",
  duration: "2019 - 2023",
  gpa: "3.8/4.0",
  status: "Dean`s Honor List",
};

const experience = [
  {
    position: "Software System Hardware Integration",
    company: "Avicena Tech",
    date: "June 2025 - April 2026",
    location: "Sunnyvale, CA",
    description: `At Avicena, I worked on the software behind validating microLED-based
      optical interconnect chips: ultra-low-energy chip-to-chip links used
      in AI/ML and HPC systems. My main contribution was a custom Python API
      for ASIC communication over FT232H (USB-to-SPI) bridges, giving
      engineers a reliable way to talk to firmware without needing to
      manually debug low-level interface issues. That API fed into a
      full-stack application with two modes: an engineering mode used
      internally for ASIC characterization, and a demo mode now used to
      showcase the technology to major tech companies evaluating it. Beyond
      that, I automated the test infrastructure used to validate chips
      before full system assembly, including parametric sweeps, telemetry
      collection, and bring-up protocols, which made chip validation faster
      and characterization data more reliable. I also set up CI/CD pipelines
      to standardize how internal software tools were packaged and deployed
      across different engineering teams.`,
    stack: ["Python", "C++", "Embedded Systems", "Hardware Validation"],
  },
];

const projects = [
  {
    name: "Anchor",
    description: `A local-first AI study tool that turns your own documents into notes,
      spaced-repetition flashcards, and quizzes — with zero data leaving your machine. Ingests
      text, PDFs, DOCX, and URLs through a provider-agnostic AI engine layer (Protocol-based,
      swappable, with retry/backoff built in) running entirely against a local Ollama instance.
      Implements a clean-room FSRS scheduler for flashcard review, plus a retrieval-augmented
      chat feature that answers questions grounded only in your ingested content, with every
      claim traceable back to its exact source chunk. Built with a FastAPI backend and Next.js
      frontend, fully tested end to end.`,
    stack: ["Python", "FastAPI", "TypeScript", "Next.js", "SQLite", "Ollama", "RAG", "FSRS", "pytest"],
    sourceCode: "https://github.com/monwe-jr/anchor",
    livePreview: null,
    images: [
      "/images/projects/anchor/anchor_1.png",
      "/images/projects/anchor/anchor_2.png",
      "/images/projects/anchor/anchor_3.png",
      "/images/projects/anchor/anchor_4.png",
      "/images/projects/anchor/anchor_5.png",
      "/images/projects/anchor/anchor_6.png",
      "/images/projects/anchor/anchor_7.png",
    ],
    video: "https://github.com/user-attachments/assets/54c652bf-ec11-41d6-b820-c3276e25a848",
  },
  {
    name: "Wireframe",
    description: `An interactive image-to-art studio built as a substantially extended fork of
      the open-source OpenASCII project. Converts uploaded images into live, cursor- and
      audio-reactive canvases using a cell-grid engine — pixel luminance and edge-gradient data
      drive per-cell rendering across multiple modes, including a custom Blueprint renderer I
      built that traces edge direction between neighboring cells to form continuous connected
      line art, rather than isolated glyphs. Added a Web Audio API-driven physics layer so cell
      motion responds to live microphone or uploaded-audio frequency data alongside the existing
      cursor-driven spring/damping field. Also diagnosed and fixed a resolution-scaling bug where
      the row dimension had no ceiling while columns did, causing uncapped grid growth and
      stutter on large canvases. Runs entirely client-side — no image ever leaves the browser.`,
    stack: ["React", "Vite", "Canvas API", "Web Audio API", "JavaScript", "pnpm workspaces"],
    sourceCode: "https://github.com/monwe-jr/wireframe-studio",
    livePreview: null,
    images: [
      "/images/projects/wireframe/wireframe_1.png",
      "/images/projects/wireframe/wireframe_2.png",
      "/images/projects/wireframe/wireframe_3.png",
    ],
    video: "https://github.com/user-attachments/assets/1caee1cf-edcf-4d35-ac21-b53085e32da0",
  },
  {
    name: "JChess",
    description: `A full-featured chess engine and GUI built for the Brock Chess Club to support
      player training and competitive prep. Implements the complete rule set from scratch —
      legal move generation, check/checkmate/stalemate detection, castling, en passant, and pawn
      promotion — behind a custom Java Swing interface with move history and captured-piece
      tracking. Play Human vs Human, or against a minimax AI with alpha-beta pruning across three
      difficulty levels, as either color. Ships as a self-contained, double-click-to-run jar via
      GitHub Releases.`,
    stack: ["Java", "Java Swing", "Maven", "JUnit", "Minimax", "Alpha-Beta Pruning"],
    sourceCode: "https://github.com/monwe-jr/Chess-",
    livePreview: null,
    images: [
      "/images/projects/chess/chess_1.png",
      "/images/projects/chess/chess_2.png",
      "/images/projects/chess/chess_3.png",
    ],
    video: "https://github.com/user-attachments/assets/5c726952-631d-4ca4-987d-afd0195e1c0f",
  },
  {
    name: "Interactive Museum Timeline",
    description: `Collaborated with a team of 7 developers to build a cross-platform interactive museum timeline 
      featuring a responsive search bar, dynamic page navigation, editable timeline elements, and real-time event handling.`,
    stack: ["JavaScript", "HTML", "CSS", "SvelteKit", "Node.js", "Vite", "Git"],
    sourceCode: "https://github.com/monwe-jr/Interactive-timeline-web-application",
    livePreview: "https://museumtimeline.vercel.app/",
    images: [
      "/images/projects/museum/museum_1.png",
      "/images/projects/museum/museum_2.png",
      "/images/projects/museum/museum_3.png",
    ],
    video: null,
  },
  {
    name: "Lock-Free Concurrent Task Scheduler",
    description: `Designed, developed, and validated a concurrent task scheduler in C++ capable of 
    dispatching 1,000+ prioritized tasks across a worker thread pool with zero failures or data races. 
    Engineered a custom queue using atomic CPU instructions instead of locks, with delayed/recurring task support, 
    real-time execution telemetry, and graceful exception isolation.`,
    stack: ["C++", "Concurrency", "Atomics", "Multithreading"],
    sourceCode: "https://github.com/monwe-jr/Concurrent-Task-Scheduler",
    livePreview: null,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500",
    video: null,
  },
  {
    name: "Real-Time IoT Fleet Monitoring Platform",
    description: `Engineered a containerized FastAPI pipeline via Docker to ingest 1Hz parametric 
      hardware sweeps from simulated STM32 edge devices. Implemented dual-layer persistence with Redis 
      for sub-100ms real-time UI caching and PostgreSQL for historical telemetry logging. Designed cloud 
      edge software architecture mapping to AWS ECS, DynamoDB, and ElastiCache.`,
    stack: ["Python", "FastAPI", "Docker", "Redis", "PostgreSQL", "AWS ECS", "DynamoDB", "STM32"],
    sourceCode: "https://github.com/monwe-jr/Iot-Tracker",
    livePreview: null,
    image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
    video: null,
  },
];

const skills = {
  languages: [
    "C",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "SvelteKit",
    "Node.js",
  ],
  tools: [
    "Git",
    "REST APIs",
    "Linux",
    "Docker",
    "VS Code",
    "Jira",
    "Confluence",
    "Figma",
    "Notion",
    "Miro",
  ],
  backend: ["PostgreSQL", "Redis", "MongoDB", "Node.js"],
  hardware: [
    "Microcontrollers (Raspberry Pi, STM32)",
    "Oscilloscopes",
    "Logic Analyzers",
    "Multimeters",
    "Sensors",
  ],
  aws: [
    "CloudFormation",
    "CloudFront",
    "S3",
    "EC2",
    "ECS",
    "Glue",
    "IAM",
    "ELB",
    "Route 53",
    "DynamoDB",
    "RDS",
    "Certificate Manager",
  ],
};

const contact = {
  email: "monwefrancis@live.com",
  resume: "/Francis_Monwe.pdf",
  location: "United States",
  linkedin: "https://www.linkedin.com/in/francis-monwe-674501198",
  github: "https://github.com/monwe-jr",
};

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "May 2025",
    credentialId: "e32082421d664e09a3526ae5dfa3c1ab",
    badge: "/images/certifications/aws-certified-developer.png",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/67f066a6d89d47a8b6c4beb8d47f2e22",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "August 2024",
    credentialId: "67f066a6d89d47a8b6c4beb8d47f2e22",
    badge: "/images/certifications/aws-solutions-architect.png",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e32082421d664e09a3526ae5dfa3c1ab",
  },
  {
    name: "AWS Certified Cloud Practitioner - Foundational",
    issuer: "Amazon Web Services",
    date: "May 2024",
    credentialId: "ff42c7fd237e4d22897a4c175507fe64",
    badge: "/images/certifications/aws-cloud-practitioner.png",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ff42c7fd237e4d22897a4c175507fe64",
  },
];

const footer = "Software Engineering Portfolio — 2026";

export {
  header,
  about,
  education,
  projects,
  skills,
  certifications,
  experience,
  contact,
  footer,
};
