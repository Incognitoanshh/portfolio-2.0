import Hero from '@/sections/hero/Hero'
import Skills from '@/sections/skills/Skills'
import Projects from '@/sections/projects/Projects'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      </div>

      <Skills />

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      </div>

      {/* Projects preview - just featured */}
      <Projects />

      {/* CTA banner */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center glass border border-cyan/10 rounded-2xl p-16"
          style={{ boxShadow: '0 0 80px rgba(0,245,212,0.05)' }}>
          <p className="font-mono text-xs text-cyan uppercase tracking-widest mb-4">// Open to work</p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wider mb-4">
            LET'S BUILD SOMETHING
          </h2>
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-8"
            style={{
              background: 'linear-gradient(135deg, #00f5d4, #7b2fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            GREAT TOGETHER
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto mb-10">
            I'm actively looking for full-time roles in Full Stack Development or Cloud/DevOps.
            Bangalore-based, open to remote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="font-mono text-sm tracking-widest uppercase px-8 py-3 rounded border border-cyan text-bg bg-cyan hover:bg-transparent hover:text-cyan transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="font-mono text-sm tracking-widest uppercase px-8 py-3 rounded border border-border text-text-secondary hover:border-cyan/40 hover:text-cyan transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
