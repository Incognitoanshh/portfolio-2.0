import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Send, Copy, Check } from 'lucide-react'
import SectionWrapper from '@/components/common/SectionWrapper'
import { SOCIAL_LINKS } from '@/lib/constants'

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

  const socials = [
    { icon: Github, label: 'GitHub', handle: '@Incognitoanshh', href: SOCIAL_LINKS.github },
    { icon: Linkedin, label: 'LinkedIn', handle: 'amritanshu1403', href: SOCIAL_LINKS.linkedin },
    { icon: ExternalLink, label: 'Portfolio', handle: 'amritanshu143.netlify.app', href: SOCIAL_LINKS.portfolio },
  ]

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
        {/* Left — info */}
        <div className="space-y-8">
          <SectionWrapper>
            <p className="text-text-secondary leading-relaxed text-sm max-w-md">
              I'm actively looking for full-time opportunities in Full Stack Development or Cloud/DevOps.
              If you have a role, a project, or just want to connect — hit me up.
            </p>
          </SectionWrapper>

          {/* Email copy */}
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

          {/* Social links */}
          <SectionWrapper delay={150}>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass border border-border/30 rounded-xl p-4 hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 flex items-center justify-center border border-border rounded-lg group-hover:border-cyan/30 group-hover:bg-cyan/5 transition-all duration-300">
                    <Icon size={15} className="text-text-secondary group-hover:text-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-medium">{label}</p>
                    <p className="font-mono text-[10px] text-text-muted">{handle}</p>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-text-muted group-hover:text-cyan transition-colors" />
                </a>
              ))}
            </div>
          </SectionWrapper>
        </div>

        {/* Right — form */}
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
