import { motion } from 'framer-motion'
import { ArrowDown, Code2 } from 'lucide-react'
import { person } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
  }),
}

function MonogramMark() {
  return (
    <div className="relative w-28 h-28 md:w-40 md:h-40 shrink-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed border-border"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-3 rounded-full border border-border"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-surface border border-border flex items-center justify-center">
          <span className="font-display font-bold text-lg md:text-2xl text-ink">MC</span>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
        <Code2 size={14} className="text-accent" />
      </div>
    </div>
  )
}

export default function Hero() {
  const [first, ...rest] = person.name.split(' ')
  const last = rest.join(' ')

  return (
    <section id="home" className="relative pt-14 md:pt-20 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display font-extrabold uppercase leading-[0.86] tracking-tight text-[15vw] sm:text-[12vw] md:text-[7rem] lg:text-[8.5rem] select-none"
          >
            {first}
            <br />
            {last}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            className="self-start md:self-center"
          >
            <MonogramMark />
          </motion.div>
        </div>

        <motion.p custom={1} initial="hidden" animate="show" variants={fadeUp} className="font-mono text-sm text-muted mt-8">
          {person.email}
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-xl text-lg text-muted leading-relaxed mt-4"
        >
          {person.intro}
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-bg rounded-full px-7 py-3.5 text-base font-medium hover:opacity-85 transition-opacity"
          >
            View My Work
          </a>
          <a
            href= "https://drive.google.com/file/d/1f9AnLucoQIwk1yFOF0QSDP1FlOiCVYWX/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-plum text-bg rounded-full px-7 py-3.5 text-base font-medium hover:opacity-85 transition-opacity"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}