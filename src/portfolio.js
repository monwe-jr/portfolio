const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://monwe-jr.github.io/portfolio', 
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

const experience = [
  {
    position: 'Software / Hardware Integration Intern',
    company: 'Avicena Tech',
    date: 'June 2025 - Present',
    location: 'Sunnyvale, CA',
    description: [
      'Develop software tools that support ASIC bring-up, hardware validation, and firmware testing for next-generation optical interconnects.',
      'Work closely with hardware and firmware teams to improve system reliability, performance, and validation workflows.'
    ],
    stack: ['Python', 'Embedded Systems', 'Hardware Validation']
  },
  {
    position: 'Software Developer (Volunteer)',
    company: 'Niagara-on-the-Lake Museum',
    date: 'Jan 2023 - Apr 2023',
    location: 'St. Catharines, ON',
    description: [
      'Built interactive software components for a cross-platform historical timeline application.',
      'Collaborated with a small team using modern version control and project management tools.'
    ],
    stack: ['JavaScript', 'SvelteKit']
  }
]

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
    image: '/images/projects/chess-app.png',
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

export { header, about, education, projects, skills, certifications, experience, contact }
