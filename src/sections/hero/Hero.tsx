import { useParticles, useTypewriter } from '@/hooks'
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SOCIAL_LINKS } from '@/lib/constants'

const ROLES = [
  'Full Stack Developer',
  'Cloud/DevOps Engineer',
  'AWS Architect',
  'Blockchain Developer',
  'React Specialist',
]

export default function Hero() {
  const canvasRef = useParticles(70)
  const role = useTypewriter(ROLES, 75, 1800)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Side decorative lines */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-cyan/40" />
        <div className="flex flex-col gap-3">
          {[
            { icon: Github, href: SOCIAL_LINKS.github },
            { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-border rounded text-text-secondary hover:text-cyan hover:border-cyan/40 transition-all duration-300"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-cyan/40 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Overline */}
        <div className="inline-flex items-center gap-2 mb-6 font-mono text-xs text-cyan tracking-widest uppercase">
          <span className="w-8 h-[1px] bg-cyan/50" />
          <span className="animate-pulse">● Available for opportunities</span>
          <span className="w-8 h-[1px] bg-cyan/50" />
        </div>

        {/* Main name - GIANT */}
        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-none tracking-wider text-white mb-2">
          AMRITANSHU
        </h1>

        {/* Glitch subtitle */}
        <div className="relative mb-6">
          <h2
            className="font-display text-[clamp(1.5rem,4vw,3.5rem)] leading-none tracking-widest"
            style={{
              background: 'linear-gradient(135deg, #00f5d4 0%, #7b2fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            FULL STACK · CLOUD · WEB3
          </h2>
        </div>

        {/* Typewriter */}
        <div className="font-mono text-sm md:text-base text-text-secondary mb-10 h-6">
          <span className="text-cyan/60">{'>'}</span>{' '}
          <span className="text-text-primary">{role}</span>
          <span className="inline-block w-[2px] h-4 bg-cyan ml-1 animate-blink align-middle" />
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-text-secondary leading-relaxed mb-10 text-sm md:text-base">
          B.E. Information Science grad with hands-on experience in building{' '}
          <span className="text-cyan">production-ready applications</span> on AWS using Docker,
          Kubernetes & Terraform. Shipped real estate platforms, blockchain identity systems, and
          cloud-native apps.
        </p>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 mb-10">
          {[
            { val: '8.1', label: 'CGPA' },
            { val: '2+', label: 'Internships' },
            { val: '5+', label: 'Projects' },
            { val: '15+', label: 'Tech Stack' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl md:text-3xl text-cyan">{val}</div>
              <div className="font-mono text-[10px] text-text-muted tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="group relative overflow-hidden font-mono text-sm tracking-widest uppercase px-8 py-3 rounded border border-cyan text-bg bg-cyan hover:bg-transparent hover:text-cyan transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="font-mono text-sm tracking-widest uppercase px-8 py-3 rounded border border-border text-text-secondary hover:border-cyan/40 hover:text-cyan transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="text-cyan/50" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 right-8 hidden lg:block">
        <div className="border border-cyan/10 rounded p-3 font-mono text-[10px] text-text-muted leading-relaxed">
          <div className="text-cyan/50">{'// stack.yml'}</div>
          <div>frontend: <span className="text-cyan">Next.js</span></div>
          <div>backend: <span className="text-cyan">Node.js</span></div>
          <div>cloud: <span className="text-cyan">AWS</span></div>
          <div>infra: <span className="text-cyan">Terraform</span></div>
        </div>
      </div>
    </section>
  )
}
