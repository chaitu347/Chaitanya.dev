import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Target } from 'lucide-react'
import { experience } from '../data/content'

const iconMap = { grad: GraduationCap, briefcase: Briefcase, target: Target }

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10"
        >
          <div className="eyebrow mb-4">experience.</div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl">My journey so far</h2>
        </motion.div>

        <div className="border-t border-border">
          {experience.map((e, i) => {
            const Icon = iconMap[e.icon]
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="grid md:grid-cols-[100px_60px_1fr_auto] gap-4 md:gap-8 items-start md:items-center py-8 md:py-10 border-b border-border"
              >
                <span className="font-mono text-sm text-faint">0{i + 1}</span>

                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center">
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl mb-1.5">{e.title}</h3>
                  {e.org && <p className="text-base text-muted">{e.org}</p>}
                  <p className="text-sm text-muted leading-relaxed mt-2 max-w-md">{e.detail}</p>
                </div>

                <span className="font-mono text-sm text-faint whitespace-nowrap md:text-right">{e.period}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}