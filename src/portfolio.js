const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio', 
  title: 'FM.',
}

const about = {
  name: 'Francis Monwe',
  role: 'Software Engineer — Systems & Hardware Integration',
  picture: 'https://avatars.githubusercontent.com/u/85851001?v=4',

  description: `
    I am a Software Engineer focused on building performant, reliable systems that bridge software and hardware.
    At Avicena Tech, I develop Python-based tooling for ASIC testing, automate STM32 firmware validation, and
    optimize software-hardware middleware to reduce latency and improve system stability.

    I enjoy working close to the metal—validating interfaces, refactoring communication protocols, and
    building developer tools that support complex hardware bring-up in real-world environments.
    `
}

const education = {
  school: 'Brock University',
  degree: 'B.Sc. (Honours) in Computer Science',
  duration: '2019 - 2023',
  gpa: '3.8/4.0',
  status: 'Dean`s Honor List'
}

const projects = [
  {
    name: 'AWS S3 Web Application',
    description:
      'A static React application deployed on AWS using S3 and CloudFront with HTTPS, custom domain routing, and global content delivery.',
    stack: [
      'AWS S3',
      'CloudFront',
      'Route 53',
      'ACM',
      'React',
      'JavaScript'
    ],
    sourceCode: 'https://github.com/monwe-jr/static-aws-S3-react-application',
    livePreview: 'https://www.awsfrancismonwesimongame.com/',
    image: '/images/projects/s3-hosted-app.png',
  },
  {
    name: 'Interactive Museum Timeline',
    description:
      `Collaborated with a team of 7 developers to build a cross-platform interactive museum timeline featuring a responsive search bar, 
      dynamic page navigation, editable timeline elements, and real-time event handling.`,
    stack: [
      'JavaScript',
      'HTML',
      'CSS',
      'SvelteKit',
      'Node.js',
      'Vite',
      'Git'
    ],
    sourceCode: 'https://github.com/monwe-jr/Interactive-timeline-web-application',
    livePreview: 'https://museumtimeline.vercel.app/',
    image: '/images/projects/interactive-timeline-app.png',
  },
  {
    name: 'Interactive Chess Application',
    description:
      `A competitive chess application built for the Brock Chess Club to support player training and competitive preparation. 
      Features a custom rule-based engine, graphical interface, and AI opponent.`,
    stack: [
      'Java',
      'Java Swing',
      'AI',
      'Minimax',
      'Alpha-Beta Pruning'
    ],
    sourceCode: 'https://github.com/monwe-jr/Chess-',
    livePreview: null,
    image: 'chess-app.png',
  },
]

const skills = {
  languages: [
    'Python',
    'Java',
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'SvelteKit',
    'C++',
    'C'
  ],
  tools: [
    'Git',
    'Linux',
    'VS Code',
    'Jira',
    'Miro',
    'Conﬂuence',
    'Notion',
    'Figma'
  ],
  backend: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Node.js'
  ],
  hardware: [
    'Microcontrollers (Raspberry Pi, STM32)',
    'Oscilloscopes',
    'Logic Analyzers',
    'Multimeters',
    'Sensors'
  ],
  aws: [
    'CloudFormation',
    'CloudFront',
    'S3',
    'EC2',
    'ECS',
    'Glue',
    'IAM',
    'ELB',
    'Route 53',
    'DynamoDB',
    'RDS',
    'Certificate Manager'
  ]
}

const contact = {
  email: 'monwefrancis@live.com',
  resume: '/Francis_Monwe.pdf',
  location: "Mountain View, CA",
  linkedin: 'https://www.linkedin.com/in/francis-monwe-674501198',
  github: 'https://github.com/monwe-jr',
}

const certifications = [
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    credentialId: 'e32082421d664e09a3526ae5dfa3c1ab',
    badge: '/images/certifications/aws-certified-developer.png',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/e32082421d664e09a3526ae5dfa3c1ab'
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'August 2024',
    credentialId: '67f066a6d89d47a8b6c4beb8d47f2e22',
    badge: '/images/certifications/aws-solutions-architect.png',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/67f066a6d89d47a8b6c4beb8d47f2e22',
  },
  {
    name: 'AWS Certified Cloud Practitioner - Foundational',
    issuer: 'Amazon Web Services',
    date: 'May 2024',
    credentialId: 'ff42c7fd237e4d22897a4c175507fe64',
    badge: '/images/certifications/aws-cloud-practitioner.png',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/ff42c7fd237e4d22897a4c175507fe64'
  }
]

const experience = [
  {
    position: 'Software / Hardware Integration Intern',
    company: 'Avicena Tech',
    date: 'June 2025 - Present',
    location: 'Sunnyvale, CA',
    description: [
      'Developed Python tools supporting next-generation microLED chip-to-chip communication bring-up, improving hardware validation workflows',
      'Optimized Python-based GUI application, reducing memory footprint by 40% and CPU utilization by 35% for improved runtime performance',
      'Validated middleware-firmware interfaces and power sequencing, ensuring ASIC register R/W compliance and system stability',
      'Automated ASIC testing and STM32 firmware flashing on custom PCBs via Python, eliminating manual verification steps',
      'Built FT232H USB-to-SPI utilities for Flash programming and analog-to-temperature conversion algorithms'
    ],
    stack: ['Python', 'STM32', 'SPI', 'GUI Development', 'Hardware Testing', 'Firmware']
  },
  {
    position: 'Front-End Developer (Volunteer)',
    company: 'Niagara-on-the-Lake Museum',
    date: 'Jan 2023 - Apr 2023',
    location: 'St. Catharines, ON',
    description: [
      'Developed reactive SvelteKit components for an interactive cross-platform timeline with real-time event handling',
      'Designed responsive UI with search, dropdowns, and navigation features enabling seamless content editing',
      'Maintained Git/Jira/Miro workflow, streamlining team collaboration and project management'
    ],
    stack: ['SvelteKit', 'JavaScript', 'Git', 'Jira', 'Miro']
  }
]


export { header, about, education, projects, skills, certifications, experience, contact }
