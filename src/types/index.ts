export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  duration: string
  highlights: string[]
  links?: {
    github?: string
    live?: string
  }
  featured?: boolean
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'cloud' | 'blockchain' | 'tools'
}

export interface Experience {
  company: string
  role: string
  period: string
  points: string[]
}

export interface NavItem {
  label: string
  path: string
}
