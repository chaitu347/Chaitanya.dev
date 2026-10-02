import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Plus } from 'lucide-react'
import { projects } from '../data/content'

function ProjectItem({ p, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <motion.button
        onClick={onToggle}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
        className="w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left group"
      >
        <div className="flex items-baseline gap-5 md:gap-8 min-w-0">
          <span className="font-mono text-sm text-faint shrink-0">0{index + 1}</span>
          <span className="font-display font-semibold text-3xl md:text-5xl truncate group-hover:text-muted transition-colors">
            {p.title}
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span
            className={`hidden sm:inline text-xs font-mono px-2.5 py-1 rounded-full ${
              p.status === 'Live' ? 'bg-accent/15 text-accent' : 'border border-border text-muted'
            }`}
          >
            {p.status}
          </span>
          <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="text-muted">
            <Plus size={22} />
          </motion.span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-0 md:pl-[4.5rem] grid md:grid-cols-[1fr_auto] gap-8">
              <div>
                <p className="text-base text-muted leading-relaxed mb-5 max-w-xl">{p.description}</p>
                <ul className="space-y-2 mb-6">
                  {p.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm text-muted flex gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-ink shrink-0 mt-2" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs font-mono px-2.5 py-1 border border-border rounded-md text-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col gap-4 md:items-end">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-ink text-bg rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-85 transition-opacity"
                  >
                    Visit <ArrowUpRight size={15} />
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-sm text-muted hover:text-ink transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  const [openId, setOpenId] = useState(projects[0]?.id ?? null)

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10"
        >
          <div className="eyebrow mb-4">work.</div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl">Selected work</h2>
        </motion.div>

        <div className="border-t border-border">
          {projects.map((p, i) => (
            <ProjectItem
              key={p.id}
              p={p}
              index={i}
              isOpen={openId === p.id}
              onToggle={() => setOpenId(openId === p.id ? null : p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}