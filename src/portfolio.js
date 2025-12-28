const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio', 
  title: 'FM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Francis Monwe',
  role: 'Software Engineer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    `I am a Software Engineer specializing in the integration of high-performance software with complex hardware systems. 
    Currently, as an Intern at Avicena Tech, I focus on Python-based tool development for ASIC testing, firmware validation for STM32, 
    and optimizing software-hardware middleware to reduce latency. With a Bachelor of Science in Computer Science and dual AWS Associate certifications, 
    I combine strong algorithmic foundations with cloud architecture expertise. I am passionate about building secure, scalable applications—whether 
    I am architecting dual-bucket S3 web apps in the cloud or refactoring SPI communication algorithms for optical hardware.`,
}

const projects = [
  {
    name: 'Interactive Chess Application',
    description:
      'A competitive chess application built for the Brock Chess Club to support player training and competitive preparation. Features a custom rule-based engine, graphical interface, and AI opponent.',
    stack: [
      'Java',
      'Java Swing',
      'AI',
      'Minimax',
      'Alpha-Beta Pruning'
    ],
    sourceCode: 'https://github.com/monwe-jr/Interactive-timeline-web-application',
    livePreview: null,
    image: 'chess-app.png',
  },
  {
    name: 'E-commerce Application',
    description:
      'A responsive MERN stack eCommerce platform with RESTful APIs, dynamic product management, and an administrative dashboard for inventory control.',
    stack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JavaScript',
      'CSS'
    ],
    sourceCode: 'https://github.com/monwe-jr/ecommerce-app',
    livePreview: null,
    image: 'ecommerce-app.png',
  },
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
    livePreview: null,
    image: 'aws-s3-app.png',
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
  resume: 'https://example.com',
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
    link: 'https://aws.amazon.com/verification?code=e32082421d664e09a3526ae5dfa3c1ab' 
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'August 2024',
    credentialId: '67f066a6d89d47a8b6c4beb8d47f2e22',
    link: 'https://aws.amazon.com/verification?code=67f066a6d89d47a8b6c4beb8d47f2e22'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'May 2024',
    credentialId: 'ff42c7fd237e4d22897a4c175507fe64',
    link: 'https://aws.amazon.com/verification?code=ff42c7fd237e4d22897a4c175507fe64'
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
    stack: ['SvelteKit', 'JavaScript', 'Git', 'Jira', 'Miro', 'Responsive Design']
  }
]


export { header, about, projects, skills, certifications, experience, contact }
