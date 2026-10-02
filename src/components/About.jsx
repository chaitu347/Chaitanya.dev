import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Target, Sparkles } from 'lucide-react'
import { person } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const facts = [
  { icon: MapPin, label: 'Based in', value: 'Vijayawada, India' },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech, ECE · 2025' },
  { icon: Sparkles, label: 'Focus', value: 'Full Stack Development' },
  { icon: Target, label: 'Status', value: person.status },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="eyebrow mb-4">
          about.
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] max-w-3xl mb-10"
        >
          A developer who ships, not just prototypes.
        </motion.h2>

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-start">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-5 text-lg text-muted leading-relaxed"
          >
            <p>
              I'm Chaitanya, based in {person.location}. I graduated in Electronics &
              Communication Engineering, but most of my working hours over the past year
              have gone into full stack web development: real-time apps, webhook
              infrastructure, and a live client site currently in production.
            </p>
            <p>
              I care about the parts that don't show up in a screenshot: auth done
              properly, signature verification on every incoming request, data that
              stays isolated between users instead of leaking across accounts.
            </p>
            <p>
              Outside of shipping my own projects, I spent four months as a Frontend
              Developer Intern building real, production React components for a live
              Learning Management System.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-3"
          >
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-surface border border-border rounded-2xl p-5">
                <Icon size={18} className="text-muted mb-3" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-faint mb-1">{label}</p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}