import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-xl text-cyan tracking-widest">AMRITANSHU</span>
          <p className="font-mono text-xs text-text-muted mt-1">
            Full Stack Developer & Cloud Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
            { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
            { icon: ExternalLink, href: SOCIAL_LINKS.portfolio, label: 'Portfolio' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center border border-border rounded hover:border-cyan/50 hover:text-cyan text-text-secondary transition-all duration-300"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-text-muted">
          © 2025 Amritanshu. Built with React + TypeScript
        </p>
      </div>
    </footer>
  )
}
