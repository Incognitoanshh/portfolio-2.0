import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants'
import { useScrollProgress } from '@/hooks'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-cyan z-[9997] transition-all duration-100"
        style={{ width: `${progress * 100}%`, boxShadow: '0 0 8px #00f5d4' }}
      />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[9996] transition-all duration-500',
          scrolled ? 'glass border-b border-cyan/10 py-3' : 'py-5 bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <span className="font-display text-2xl text-cyan glow-text tracking-wider">
              AMRITANSHU
            </span>
            <span className="font-mono text-xs text-text-secondary group-hover:text-cyan transition-colors duration-300">
              .dev
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      'relative px-4 py-2 font-mono text-sm tracking-widest uppercase transition-all duration-300 group',
                      active ? 'text-cyan' : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {active && (
                      <span className="absolute inset-0 bg-cyan/5 border border-cyan/20 rounded" />
                    )}
                    <span className="relative">
                      {active && <span className="text-cyan/50 mr-1">{'>'}</span>}
                      {item.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <a
            href="mailto:amritanshu140101@gmail.com"
            className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase border border-cyan/30 text-cyan px-4 py-2 rounded hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-300"
            style={{ boxShadow: '0 0 15px rgba(0,245,212,0.1)' }}
          >
            Hire Me
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-secondary hover:text-cyan transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9990] glass pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-6 pt-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'font-mono text-lg tracking-widest uppercase transition-colors',
                  location.pathname === item.path ? 'text-cyan glow-text' : 'text-text-secondary'
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:amritanshu140101@gmail.com"
              className="mt-4 border border-cyan/30 text-cyan font-mono px-8 py-3 rounded text-sm tracking-widest uppercase hover:bg-cyan/10 transition-all"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
