import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { person } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="eyebrow mb-6">
          contact.
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="font-display font-semibold text-4xl md:text-6xl max-w-2xl leading-[1.1] mb-10"
        >
          Curious about what we can build together?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16"
        >
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 bg-ink text-bg rounded-full px-7 py-3.5 text-base font-medium hover:opacity-85 transition-opacity w-fit"
          >
            Get in Touch <ArrowUpRight size={18} />
          </a>
          <span className="flex items-center gap-2 text-sm text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {person.status}
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="flex flex-wrap gap-x-10 gap-y-4 pb-10 border-b border-border text-base text-muted"
        >
          <a href={`mailto:${person.email}`} className="flex items-center gap-2 hover:text-ink transition-colors">
            <Mail size={17} /> {person.email}
          </a>
          <span className="flex items-center gap-2">
            <Phone size={17} /> {person.phone}
          </span>
          <a href={person.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ink transition-colors">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a href={person.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ink transition-colors">
            <Github size={17} /> GitHub
          </a>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-sm text-faint">
          <span>Designed & developed by Merugula Chaitanya</span>
          <span>All rights reserved, © {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  )
}