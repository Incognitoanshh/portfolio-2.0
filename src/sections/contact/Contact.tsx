import { useState } from 'react'
import { Github, Linkedin, Send, Copy, Check } from 'lucide-react'
import SectionWrapper from '@/components/common/SectionWrapper'
import { SOCIAL_LINKS } from '@/lib/constants'

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

type SocialItem = {
  icon: React.ComponentType
  label: string
  handle: string
  href: string
}

const SOCIALS: SocialItem[] = [
  { icon: Github, label: 'GitHub', handle: '@Incognitoanshh', href: SOCIAL_LINKS.github },
  { icon: Linkedin, label: 'LinkedIn', handle: 'amritanshu1403', href: SOCIAL_LINKS.linkedin },
  { icon: TwitterIcon, label: 'Twitter / X', handle: '@_AmritAns7u', href: 'https://x.com/_AmritAns7u' },
  { icon: InstagramIcon, label: 'Instagram', handle: '@annshh.x_', href: 'https://www.instagram.com/annshh.x_/' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Hi Amritanshu,\n\n${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="contact">
      <SectionWrapper>
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">04 / Contact</span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-2 tracking-wider">
            LET'S TALK
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <SectionWrapper>
            <p className="text-text-secondary leading-relaxed text-sm max-w-md">
              I'm actively looking for full-time opportunities in Full Stack Development or Cloud/DevOps.
              If you have a role, a project, or just want to connect — hit me up.
            </p>
          </SectionWrapper>

          <SectionWrapper delay={100}>
            <div className="glass border border-cyan/10 rounded-xl p-5">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2">// Primary Email</p>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm text-text-primary break-all">{SOCIAL_LINKS.email}</span>
                <button
                  onClick={copyEmail}
                  className="flex-shrink-0 flex items-center gap-1.5 font-mono text-xs text-cyan border border-cyan/20 px-3 py-1.5 rounded hover:bg-cyan/10 transition-all duration-300"
                >
                  {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
                </button>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper delay={150}>
            <div className="space-y-3">
              {SOCIALS.map(({ icon: Icon, label, handle, href }) => (
                
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass border border-border/30 rounded-xl p-4 hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 flex items-center justify-center border border-border rounded-lg group-hover:border-cyan/30 group-hover:bg-cyan/5 transition-all duration-300 text-text-secondary group-hover:text-cyan">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">{label}</p>
                    <p className="font-mono text-[10px] text-text-muted">{handle}</p>
                  </div>
                  <span className="ml-auto text-text-muted group-hover:text-cyan transition-colors">
                    <ExternalLinkIcon />
                  </span>
                </a>
              ))}
            </div>
          </SectionWrapper>
        </div>

        <SectionWrapper delay={200}>
          <div className="glass border border-cyan/10 rounded-xl p-8" style={{ boxShadow: '0 0 40px rgba(0,245,212,0.04)' }}>
            <p className="font-mono text-[10px] text-cyan uppercase tracking-widest mb-6">// Send a Message</p>
            <div className="space-y-4">
              <div>
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted font-mono focus:outline-none focus:border-cyan/40 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted font-mono focus:outline-none focus:border-cyan/40 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1.5 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Hey Amritanshu, I'd like to..."
                  rows={5}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted font-mono focus:outline-none focus:border-cyan/40 transition-colors duration-300 resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message}
                className="w-full flex items-center justify-center gap-2 font-mono text-sm tracking-widest uppercase py-3 rounded-lg border border-cyan text-bg bg-cyan hover:bg-transparent hover:text-cyan transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={14} /> Send Message
              </button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}