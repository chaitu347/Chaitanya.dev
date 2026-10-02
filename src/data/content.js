

export const person = {
  name: 'Merugula Chaitanya',
  role: 'Full Stack Developer',
  location: 'Vijayawada, Andhra Pradesh',
  email: 'chaitu347347@gmail.com',
  phone: '+91 95506 68883',
  linkedinUrl: 'https://linkedin.com/in/merugula-chaitanya-5044b7272',
  githubUrl: 'https://github.com/chaitu347',
  resumeUrl: 'https://drive.google.com/file/d/1f9AnLucoQIwk1yFOF0QSDP1FlOiCVYWX/view?usp=drive_link',
  photoUrl: 'https://res.cloudinary.com/dmof2vhqp/image/upload/v1790773234/photo-modified_circle_ur6uw9.png',
  status: 'Available For Work',
  intro:
    "I build web applications end to end, from the database schema to the interface someone actually clicks on. 2025 graduate, currently focused on shipping production-grade full stack projects and interviewing for Full Stack Developer roles.",
  doodle: 'Code / Debug / Ship / Repeat',
  education: {
    degree: 'B.Tech, Electronics & Communication Engineering',
    school: 'Sir C.R. Reddy College of Engineering, Eluru',
    period: '2021 – 2025',
    detail: 'CGPA 8.2 · Guest lecturer to 100+ students',
  },
}

// key must match an icon mapped inside Skills.jsx
export const skills = [
  { name: 'Java', key: 'java' },
  { name: 'JavaScript', key: 'javascript' },
  { name: 'TypeScript', key: 'typescript' },
  { name: 'React', key: 'react' },
  { name: 'Next.js', key: 'nextjs' },
  { name: 'Node.js', key: 'nodejs' },
  { name: 'Express', key: 'express' },
  { name: 'MongoDB', key: 'mongodb' },
  { name: 'MySQL', key: 'mysql' },
  { name: 'HTML5', key: 'html5' },
  { name: 'CSS3', key: 'css3' },
  { name: 'Tailwind', key: 'tailwind' },
  { name: 'Bootstrap', key: 'bootstrap' },
  { name: 'Socket.io', key: 'socketio' },
  { name: 'JWT', key: 'jwt' },
  { name: 'Figma', key: 'figma' },
  { name: 'Git & GitHub', key: 'github' },
  { name: 'Postman', key: 'postman' },
]

export const experience = [
  {
    icon: 'grad',
    period: '2021 – 2025',
    title: 'B.Tech in ECE',
    org: 'Sir C.R. Reddy College of Engineering',
    detail: 'CGPA 8.2 · Guest lecturer to 100+ students on campus.',
  },
  {
    icon: 'briefcase',
    period: 'Jan 2026 – Apr 2026',
    title: 'Frontend Developer Intern',
    org: 'Expograph (Remote)',
    detail: 'Built React components for a live LMS and integrated REST APIs end to end.',
  },
  {
    icon: 'target',
    period: '2026',
    title: 'Goal',
    org: '',
    detail: 'Land a Full Stack Developer role and keep shipping production-grade projects.',
  },
]

export const projects = [
  {
    id: 'razorlens',
    title: 'RazorLens',
    tags: ['Next.js', 'Full Stack'],
    description:
      'A webhook inspection and debugging tool for Razorpay integrations. Every user gets a unique, signature-verified endpoint that logs and displays every webhook event Razorpay sends, so a failed payment notification is never a silent mystery.',
    highlights: [
      'HMAC-SHA256 signature verification against each user\'s own secret using raw, unparsed request bytes.',
      'Multi-tenant design: dedicated webhook URL and secret per user, events never cross accounts.',
      'JWT auth from scratch with bcrypt password hashing and a custom Express middleware.',
      'Full event logging, both valid and rejected signatures are stored, not just accepted ones.',
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    link: 'https://razorlens.vercel.app',
    repo: '',
    status: 'Live',
  },
  {
    id: 'reqora',
    title: 'Reqora',
    tags: ['Next.js', 'Full Stack'],
    description:
      'A live, collaborative API-testing tool in the spirit of Postman, built with real-time collaboration and secured request endpoints.',
    highlights: [
      'Real-time collaborative editing so a team can build and test API requests together.',
      'Secured endpoints handling authenticated, per-user request execution.',
    ],
    stack: ['TypeScript', 'Next.js', 'MongoDB', 'Express'],
    link: '',
    repo: 'https://github.com/chaitu347/Reqora',
    status: 'Live',
  },
  {
    id: 'skillduel',
    title: 'SkillDuel',
    tags: ['MERN', 'Real-Time'],
    description:
      'Real-time 1v1 study/skill-battle platform. Users challenge each other, compete live, and track progress over time.',
    highlights: [
      'Real-time state sync between two players over Socket.io with reconnect handling.',
      'JWT-based auth and a monorepo structure separating client/server/shared types.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    link: '',
    repo: '',
    status: 'Built',
  },
  {
    id: 'cloudpulse',
    title: 'CloudPulse',
    tags: ['Dashboard', 'MySQL'],
    description:
      'Infrastructure monitoring dashboard that ingests metrics from multiple simulated servers and visualizes system health in real time.',
    highlights: [
      'Multi-server agent architecture pushing metrics into a MySQL-backed API.',
      'Chart.js dashboards for CPU/memory/uptime trends.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Chart.js'],
    link: '',
    repo: '',
    status: 'Built',
  },
  {
    id: 'toonhub',
    title: 'TOONHUB',
    tags: ['React', 'Vite'],
    description:
      'A 3D figurine showcase carousel with smooth, role-based transitions between views.',
    highlights: [
      'Custom carousel logic driving 3D-feeling transitions without a heavy animation library.',
      'Role-based transition states so the carousel behaves differently depending on the selected view.',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS'],
    link: '',
    repo: '',
    status: 'Built',
  },
  {
    id: 'spotlight-landing',
    title: 'Spotlight Landing Page',
    tags: ['React', 'Vite', 'UI Experiment'],
    description:
      'A hover-reveal landing page experiment with cursor-tracking spotlight effects and a dark, gold-accented aesthetic.',
    highlights: [
      'Cursor-tracking spotlight effect built from scratch with mouse-position state, not a plugin.',
      'Assets embedded as base64 to keep the whole experiment a single self-contained file.',
    ],
    stack: ['React', 'Vite'],
    link: '',
    repo: '',
    status: 'Built',
  },
  {
    id: 'finvis',
    title: 'Finvis Associates',
    tags: ['Client Work', 'Deployed'],
    description: 'Live client website for a financial advisory firm, deployed and in production use on Vercel.',
    highlights: ['Delivered to a real client with real constraints: copy, brand palette, deadline.'],
    stack: ['React', 'Tailwind CSS', 'Vercel'],
    link: '',
    repo: '',
    status: 'Live',
  },
  {
    id: 'apply-assistant',
    title: 'Apply Assistant',
    tags: ['Chrome Extension', 'AI'],
    description:
      'Chrome extension that scores a resume against a job description locally, then uses the Claude API to suggest tailored edits.',
    highlights: ['Local ATS-style keyword scoring engine, no server round-trip needed for the base score.'],
    stack: ['JavaScript', 'Chrome Extension APIs', 'Claude API'],
    link: '',
    repo: '',
    status: 'Built',
  },
]

// Real in-progress work, replaces a fake "blog" section
export const building = [
  {
    title: 'TaskFlow',
    detail: 'Multi-tenant SaaS with org roles and a Java Spring Boot API behind a Next.js frontend.',
  },
  {
    title: 'Real-Time Inventory System',
    detail: 'Redis-backed inventory and order system with WebSocket-driven live stock updates.',
  },
]