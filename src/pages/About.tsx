import AboutSection from '@/sections/about/About'
import SkillsSection from '@/sections/skills/Skills'

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutSection />
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      </div>
      <SkillsSection />
    </main>
  )
}
