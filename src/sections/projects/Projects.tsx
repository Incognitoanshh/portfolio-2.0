import { useState } from 'react'
import { PROJECTS } from '@/lib/constants'
import SectionWrapper from '@/components/common/SectionWrapper'
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <SectionWrapper delay={index * 120}>
      <div
        className={cn(
          'relative group border rounded-xl overflow-hidden transition-all duration-500 glass',
          project.featured ? 'border-cyan/20 hover:border-cyan/40' : 'border-border hover:border-cyan/20',
          expanded && 'border-cyan/40'
        )}
        style={project.featured ? { boxShadow: '0 0 30px rgba(0,245,212,0.05)' } : {}}
      >
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-cyan/10 border border-cyan/20 rounded px-2 py-1">
            <Zap size={10} className="text-cyan" />
            <span className="font-mono text-[10px] text-cyan uppercase tracking-widest">Featured</span>
          </div>
        )}

        {/* Card header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                {project.duration}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-white tracking-wider mt-1 leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Expanded details */}
        {expanded && (
          <div className="px-6 pb-4 border-t border-cyan/10 pt-4">
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {project.longDescription}
            </p>
            <div className="space-y-2">
              {project.highlights.map(h => (
                <div key={h} className="flex items-start gap-2">
                  <span className="text-cyan mt-1 flex-shrink-0">›</span>
                  <span className="font-mono text-xs text-text-secondary">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Card footer */}
        <div className="px-6 py-4 border-t border-border/30 flex items-center justify-between">
          <div className="flex gap-3">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-cyan transition-colors">
                <Github size={13} /> GitHub
              </a>
            )}
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-cyan transition-colors">
                <ExternalLink size={13} /> Live
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 font-mono text-xs text-cyan/60 hover:text-cyan transition-colors"
          >
            {expanded ? <><ChevronUp size={13} /> Less</> : <><ChevronDown size={13} /> Details</>}
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <SectionWrapper>
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">03 / Projects</span>
          <h2 className="font-display text-5xl md:text-7xl text-white mt-2 tracking-wider">
            WORK
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* More projects note */}
      <SectionWrapper delay={300} className="mt-12 text-center">
        <div className="border border-border/50 rounded-lg p-8 glass inline-block">
          <p className="font-mono text-sm text-text-secondary mb-4">
            {'// More projects on GitHub'}
          </p>
          <a
            href="https://github.com/Incognitoanshh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase border border-cyan/30 text-cyan px-6 py-2.5 rounded hover:bg-cyan/10 transition-all duration-300"
          >
            <Github size={14} /> View All on GitHub
          </a>
        </div>
      </SectionWrapper>
    </section>
  )
}
