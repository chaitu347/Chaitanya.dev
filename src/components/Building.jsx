import { motion } from 'framer-motion'
import { Hammer } from 'lucide-react'
import { building } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Building() {
  return (
    <section id="building" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="eyebrow mb-4">
            <div className="eyebrow mb-4">building.</div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl">What's in progress right now</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {building.map((b, i) => (
            <motion.div
              key={b.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-6"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-bg border border-border flex items-center justify-center">
                <Hammer size={16} />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}