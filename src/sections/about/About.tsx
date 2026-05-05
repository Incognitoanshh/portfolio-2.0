import { EXPERIENCES, CERTIFICATIONS } from '@/lib/constants'
import SectionWrapper from '@/components/common/SectionWrapper'
import { Award, Briefcase, GraduationCap, MapPin, Phone, Mail } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="about">
      <SectionWrapper>
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">01 / About</span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-2 tracking-wider">
            WHO I AM
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — bio */}
        <div className="space-y-8">
          <SectionWrapper>
            <div className="glass border border-cyan/10 rounded-xl p-8" style={{ boxShadow: '0 0 40px rgba(0,245,212,0.04)' }}>
              {/* Avatar placeholder with initials */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-cyan/30"
                style={{ background: 'linear-gradient(135deg, rgba(0,245,212,0.1), rgba(123,47,255,0.1))' }}>
                <span className="font-display text-2xl text-cyan">A</span>
              </div>

              <h3 className="font-display text-3xl text-white tracking-wider mb-1">AMRITANSHU</h3>
              <p className="font-mono text-xs text-cyan/70 mb-6">Full Stack Developer · Cloud/DevOps Engineer</p>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Engineering grad from <span className="text-text-primary">Cambridge Institute of Technology, Bangalore</span>{' '}
                with a CGPA of <span className="text-cyan font-mono">8.1/10</span>. Passionate about building scalable,
                production-grade systems — from polished frontends with React/Next.js to containerized cloud backends
                on AWS with Docker and Kubernetes.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                I've shipped a full real estate platform, a decentralized identity system on blockchain, and have
                hands-on IaC experience with Terraform. Currently hunting my next full-time opportunity.
              </p>

              {/* Contact info */}
              <div className="mt-6 pt-6 border-t border-border/30 space-y-2">
                {[
                  { icon: MapPin, text: 'Bangalore, India' },
                  { icon: Phone, text: '+91 9835526164' },
                  { icon: Mail, text: 'amritanshu140101@gmail.com' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={12} className="text-cyan/50 flex-shrink-0" />
                    <span className="font-mono text-xs text-text-secondary">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* Education */}
          <SectionWrapper delay={100}>
            <div className="glass border border-border/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={15} className="text-cyan" />
                <span className="font-mono text-xs text-cyan uppercase tracking-widest">Education</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-text-primary font-medium text-sm">B.E. in Information Science</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">Cambridge Institute of Technology, Bangalore</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="tag">CGPA: 7.39 / 10</span>
                    <span className="font-mono text-[10px] text-text-muted">2021 – 2025</span>
                  </div>
                </div>
                <div className="border-t border-border/30 pt-4">
                  <h4 className="text-text-primary font-medium text-sm">Pre-University (CBSE)</h4>
                  <p className="font-mono text-xs text-text-muted mt-0.5">71.4% · 2019 – 2021</p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Right — experience + certs */}
        <div className="space-y-8">
          {/* Experience timeline */}
          <SectionWrapper delay={150}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={15} className="text-cyan" />
                <span className="font-mono text-xs text-cyan uppercase tracking-widest">Experience</span>
              </div>
              <div className="relative pl-5">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent" />

                <div className="space-y-8">
                  {EXPERIENCES.map((exp, i) => (
                    <SectionWrapper key={exp.company} delay={i * 100}>
                      <div className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border border-cyan bg-bg" />

                        <div className="glass border border-border/30 rounded-xl p-5 hover:border-cyan/20 transition-colors duration-300">
                          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                            {exp.period}
                          </span>
                          <h4 className="text-text-primary font-medium text-sm mt-1">{exp.role}</h4>
                          <p className="font-mono text-xs text-cyan/70 mb-3">{exp.company}</p>
                          <ul className="space-y-2">
                            {exp.points.map((pt, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="text-cyan/50 mt-0.5 flex-shrink-0 text-xs">›</span>
                                <span className="text-text-secondary text-xs leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SectionWrapper>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Certifications */}
          <SectionWrapper delay={200}>
            <div className="glass border border-border/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Award size={15} className="text-cyan" />
                <span className="font-mono text-xs text-cyan uppercase tracking-widest">Certifications</span>
              </div>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 border border-border/30 rounded-lg hover:border-cyan/20 transition-colors duration-300">
                    <div className="w-6 h-6 rounded flex items-center justify-center border border-cyan/20 bg-cyan/5 flex-shrink-0 mt-0.5">
                      <Award size={11} className="text-cyan" />
                    </div>
                    <div>
                      <p className="text-text-primary text-xs font-medium">{cert.name}</p>
                      <p className="font-mono text-[10px] text-text-muted mt-0.5">
                        {cert.issuer} · {cert.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
