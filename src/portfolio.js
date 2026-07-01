const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://monwe-jr.github.io/portfolio",
  title: "FM.",
};

const about = {
  name: "Francis Monwe",
  role: "Software Engineer",
  picture: "https://avatars.githubusercontent.com/u/85851001?v=4",

  description: `
    I'm a software engineer working at the intersection of embedded systems and cloud edge software, focused on performance, reliability, and 
    system validation. At Avicena Tech, I design and validate middleware-to-firmware interfaces, develop Python APIs for ASIC testing, 
    and write technical documentation for production-critical systems where correctness and stability matter.
    `,
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
    description: [
      "Designed and validated middleware-to-firmware interfaces and ASIC register operations by developing a custom Python API for embedded firmware interaction via FT232H (USB-to-SPI) bridges, improving interface reliability and reducing manual debugging time.",
      "Developed and documented high-level Python software utilities to automate hardware bring-up protocols, enabling consistent deployment of ASIC test environments; collaborated with technician teams to gather requirements and validate functionality.",
      "Designed, implemented, and unit-tested Python scripts to automate parametric sweeps and step-testing for multi-variable ASIC testing, collecting real-time telemetry to identify stable operating ranges.",
      "Built and maintained internal pre-assembly validation tools to benchmark hardware performance, conducted code reviews and regression tests to ensure software quality, and identified component defects prior to the assembly stage.",
      "Designed and automated a CI/CD pipeline using Git-based source code management to package and deploy Python applications across shared servers; wrote technical documentation for all deployment processes, reducing manual effort and improving consistency.",
    ],
    stack: ["Python", "C++", "Embedded Systems", "Hardware Validation"],
  },
  {
    position: "Software Developer (Volunteer)",
    company: "Niagara-on-the-Lake Museum",
    date: "Jan 2023 - Apr 2023",
    location: "St. Catharines, ON",
    description: [
      "Built interactive software components for a cross-platform historical timeline application.",
      "Collaborated with a small team using modern version control and project management tools.",
    ],
    stack: ["JavaScript", "SvelteKit", "REST APIs"],
  },
];

const projects = [
  {
    name: "Lock-Free Concurrent Task Scheduler",
    description:
      "Designed, developed, and validated a concurrent task scheduler in C++ capable of dispatching 1,000+ prioritized tasks across a worker thread pool with zero failures or data races. Engineered a custom queue using atomic CPU instructions instead of locks, with delayed/recurring task support, real-time execution telemetry, and graceful exception isolation.",
    stack: ["C++", "Concurrency", "Atomics", "Multithreading"],
    sourceCode: "https://github.com/monwe-jr/Concurrent-Task-Scheduler",
    livePreview: null,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500",
  },
  {
    name: "Real-Time IoT Fleet Monitoring Platform",
    description:
      "Engineered a containerized FastAPI pipeline via Docker to ingest 1Hz parametric hardware sweeps from simulated STM32 edge devices. Implemented dual-layer persistence with Redis for sub-100ms real-time UI caching and PostgreSQL for historical telemetry logging. Designed cloud edge software architecture mapping to AWS ECS, DynamoDB, and ElastiCache.",
    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "Redis",
      "PostgreSQL",
      "AWS ECS",
      "DynamoDB",
      "STM32",
    ],
    sourceCode: "https://github.com/monwe-jr/Iot-Tracker",
    livePreview: null,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
  },
  {
    name: "AWS S3 Web Application",
    description:
      "A static React application deployed on AWS using S3 and CloudFront with HTTPS, custom domain routing, and global content delivery.",
    stack: ["AWS S3", "CloudFront", "Route 53", "ACM", "React", "JavaScript"],
    sourceCode: "https://github.com/monwe-jr/static-aws-S3-react-application",
    livePreview: "https://www.awsfrancismonwesimongame.com/",
    image: "/images/projects/s3-hosted-app.png",
  },
  {
    name: "Interactive Museum Timeline",
    description: `Collaborated with a team of 7 developers to build a cross-platform interactive museum timeline featuring a responsive search bar, 
      dynamic page navigation, editable timeline elements, and real-time event handling.`,
    stack: ["JavaScript", "HTML", "CSS", "SvelteKit", "Node.js", "Vite", "Git"],
    sourceCode:
      "https://github.com/monwe-jr/Interactive-timeline-web-application",
    livePreview: "https://museumtimeline.vercel.app/",
    image: "/images/projects/interactive-timeline-app.png",
  },
  {
    name: "Interactive Chess Application",
    description: `A competitive chess application built for the Brock Chess Club to support player training and competitive preparation. 
      Features a custom rule-based engine, graphical interface, and AI opponent.`,
    stack: ["Java", "Java Swing", "AI", "Minimax", "Alpha-Beta Pruning"],
    sourceCode: "https://github.com/monwe-jr/Chess-",
    livePreview: null,
    image: "/images/projects/chess-app.png",
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
  location: "Mountain View, CA",
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
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e32082421d664e09a3526ae5dfa3c1ab",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "August 2024",
    credentialId: "67f066a6d89d47a8b6c4beb8d47f2e22",
    badge: "/images/certifications/aws-solutions-architect.png",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/67f066a6d89d47a8b6c4beb8d47f2e22",
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
