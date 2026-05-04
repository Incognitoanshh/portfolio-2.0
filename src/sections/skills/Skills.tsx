import { useState } from 'react'
import { SKILLS } from '@/lib/constants'
import SectionWrapper from '@/components/common/SectionWrapper'
import { useInView } from '@/hooks'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'cloud', label: 'Cloud & DevOps' },
  { key: 'blockchain', label: 'Blockchain' },
  { key: 'tools', label: 'Tools' },
]

const CATEGORY_COLORS: Record<string, string> = {
  frontend: 'from-cyan to-cyan/40',
  backend: 'from-electric to-electric/40',
  cloud: 'from-cyan to-electric',
  blockchain: 'from-electric to-cyan/60',
  tools: 'from-cyan/60 to-cyan/20',
}

function SkillBar({ name, level, category, animate }: { name: string; level: number; category: string; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-xs text-text-secondary group-hover:text-text-primary transition-colors">{name}</span>
        <span className="font-mono text-xs text-cyan/60">{level}%</span>
      </div>
      <div className="h-[2px] bg-border rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out', CATEGORY_COLORS[category] || 'from-cyan to-cyan/40')}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('all')
  const { ref, inView } = useInView(0.1)

  const filtered = active === 'all' ? SKILLS : SKILLS.filter(s => s.category === active)

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="skills">
      <SectionWrapper>
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">02 / Skills</span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-2 tracking-wider">
            TECH STACK
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={cn(
                'font-mono text-xs tracking-widest uppercase px-4 py-2 rounded border transition-all duration-300',
                active === cat.key
                  ? 'border-cyan text-cyan bg-cyan/10'
                  : 'border-border text-text-secondary hover:border-cyan/30 hover:text-text-primary'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
          {filtered.map((skill, i) => (
            <SectionWrapper key={skill.name} delay={i * 40}>
              <SkillBar {...skill} animate={inView} />
            </SectionWrapper>
          ))}
        </div>

        {/* Tech cloud */}
        <SectionWrapper delay={300} className="mt-16">
          <div className="border border-border/50 rounded-lg p-8 glass">
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">// Full Tech Inventory</p>
            <div className="flex flex-wrap gap-2">
              {[
                'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
                'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'Shadcn UI', 'HTML5', 'CSS3',
                'AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Cognito', 'API Gateway', 'IAM',
                'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD',
                'PostgreSQL', 'PostGIS', 'Mapbox GL', 'React Hook Form', 'Zod',
                'Solidity', 'Hardhat', 'IPFS', 'Ethereum', 'Remix IDE',
                'Postman', 'Git', 'VS Code', 'Vite', 'Kali Linux',
              ].map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </SectionWrapper>
    </section>
  )
}
