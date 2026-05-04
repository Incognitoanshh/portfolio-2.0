import type { Project, Skill, Experience, NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React.js', level: 92, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Redux Toolkit', level: 82, category: 'frontend' },
  { name: 'Framer Motion', level: 78, category: 'frontend' },
  { name: 'JavaScript ES6+', level: 90, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 82, category: 'backend' },
  { name: 'REST APIs', level: 88, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'Spring Boot', level: 40, category: 'backend' },

  // Cloud & DevOps
  { name: 'AWS (EC2/S3/RDS)', level: 82, category: 'cloud' },
  { name: 'Docker', level: 85, category: 'cloud' },
  { name: 'Kubernetes', level: 72, category: 'cloud' },
  { name: 'Terraform', level: 75, category: 'cloud' },
  { name: 'CI/CD (GitHub Actions)', level: 80, category: 'cloud' },
  { name: 'AWS Cognito', level: 78, category: 'cloud' },

  // Blockchain
  { name: 'Solidity', level: 72, category: 'blockchain' },
  { name: 'Smart Contracts', level: 70, category: 'blockchain' },
  { name: 'IPFS', level: 68, category: 'blockchain' },
  { name: 'Hardhat', level: 70, category: 'blockchain' },

  // Tools
  { name: 'Git & GitHub', level: 90, category: 'tools' },
  { name: 'Postman', level: 85, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Mapbox GL', level: 75, category: 'tools' },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'NASSCOM & IT-ITeS Sector Skill Council',
    role: 'Cloud Application Developer Intern',
    period: 'Oct 2024 – Mar 2025',
    points: [
      'Dockerized a full-stack To-Do application, containerizing frontend and backend services and publishing images to Docker Hub for consistent, portable deployments.',
      'Provisioned and managed AWS infrastructure (EC2, S3, IAM) using Terraform for IaC, ensuring reproducible and auditable cloud environments.',
    ],
  },
  {
    company: 'Null Class',
    role: 'Cloud Deployment Trainee',
    period: 'Jun 2025 – Jul 2025',
    points: [
      'Deployed full-stack web applications on AWS — configured S3 static hosting, EC2 instance management, domain mapping, HTTPS setup, and rollback strategies.',
      'Gained practical exposure to cloud cost management, instance monitoring with CloudWatch, and environment-specific configuration for staging and production.',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'rental-platform',
    title: 'Enterprise Rental Apartment Platform',
    description: 'Production-grade full-stack real estate web application with interactive map-based property discovery.',
    longDescription:
      'Architected and delivered a production-grade full-stack real estate web application: Next.js frontend with Shadcn UI, Tailwind CSS, and Framer Motion; Node.js backend hosted on EC2 with AWS Cognito authentication. Implemented type-safe codebase with Redux Toolkit, React Hook Form, Zod validation, and Mapbox GL.',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'PostGIS', 'Mapbox GL', 'Redux Toolkit'],
    duration: '4–5 Months',
    highlights: [
      'AWS Cognito for auth, EC2 for backend hosting',
      'PostGIS + Mapbox GL for geo-based property search',
      'Full TypeScript codebase, Zod for runtime validation',
      'Framer Motion animations, Shadcn UI components',
    ],
    featured: true,
  },
  {
    id: 'decentralized-identity',
    title: 'Decentralized Identity Verification System',
    description: 'Blockchain-based identity platform with Solidity smart contracts and Google Cloud Vision OCR pipeline.',
    longDescription:
      'Built a blockchain-based identity platform where Solidity smart contracts (deployed to Rinkeby testnet via Hardhat) store verified identities as immutable on-chain records. Integrated Google Cloud Vision API OCR pipeline for Aadhaar document extraction with cross-validation against blockchain records and IPFS storage.',
    tags: ['React.js', 'Node.js', 'Solidity', 'Hardhat', 'IPFS', 'Google Cloud Vision API'],
    duration: 'Final Year Project',
    highlights: [
      'Smart contracts on Rinkeby testnet via Hardhat',
      'Google Cloud Vision OCR for Aadhaar extraction',
      'IPFS for tamper-proof decentralized storage',
      'Immutable on-chain identity records',
    ],
    featured: true,
  },
]

export const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', status: 'In Progress (2025)' },
  { name: 'AWS Cloud Deployment Training', issuer: 'Nullclass', status: '2025' },
  { name: 'Cloud Application Developer', issuer: 'NASSCOM', status: '2025' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/Incognitoanshh',
  linkedin: 'https://linkedin.com/in/amritanshu1403',
  email: 'amritanshu140101@gmail.com',
  portfolio: 'https://amritanshu143.netlify.app',
}
