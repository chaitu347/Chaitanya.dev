import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { person } from '../data/content'

const links = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const ids = ['home', ...links.map((l) => l.id)]
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#home" className="font-mono text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors">
          Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition-colors ${active === link.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="hidden md:flex items-center gap-2 text-xs text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {person.status}
        </span>
      </div>
    </motion.header>
  )
}