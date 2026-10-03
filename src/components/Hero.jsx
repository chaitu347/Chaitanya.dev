import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { person } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
  }),
}

const codeLines = [
  { indent: 0, parts: [{ t: 'const ', c: 'text-plum' }, { t: 'dev ', c: 'text-ink' }, { t: '= {', c: 'text-faint' }] },
  { indent: 1, parts: [{ t: 'name', c: 'text-accent' }, { t: ': ', c: 'text-faint' }, { t: "'Chaitanya'", c: 'text-ink' }, { t: ',', c: 'text-faint' }] },
  { indent: 1, parts: [{ t: 'role', c: 'text-accent' }, { t: ': ', c: 'text-faint' }, { t: "'Full Stack Dev'", c: 'text-ink' }, { t: ',', c: 'text-faint' }] },
  { indent: 1, parts: [{ t: 'stack', c: 'text-accent' }, { t: ': [', c: 'text-faint' }, { t: "'React', 'Node', 'TS'", c: 'text-ink' }, { t: '],', c: 'text-faint' }] },
  { indent: 1, parts: [{ t: 'available', c: 'text-accent' }, { t: ': ', c: 'text-faint' }, { t: 'true', c: 'text-plum' }, { t: ',', c: 'text-faint' }] },
  { indent: 0, parts: [{ t: '}', c: 'text-faint' }] },
]

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="w-full max-w-[300px] rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-[11px] text-faint">whoami.ts</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-[1.9]">
        {codeLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
            style={{ paddingLeft: line.indent * 16 }}
          >
            {line.parts.map((part, j) => (
              <span key={j} className={part.c}>
                {part.t}
              </span>
            ))}
          </motion.p>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.1 }}
          className="inline-block w-[7px] h-[14px] bg-accent ml-0.5 align-middle"
        />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [first, ...rest] = person.name.split(' ')
  const last = rest.join(' ')

  return (
    <section id="home" className="relative pt-14 md:pt-20 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display font-extrabold uppercase leading-[0.86] tracking-tight text-[15vw] sm:text-[12vw] md:text-[7rem] lg:text-[6.5rem] xl:text-[7.5rem] select-none shrink-0"
          >
            {first}
            <br />
            {last}
          </motion.h1>

          <div className="w-full lg:w-auto lg:shrink-0">
            <TerminalCard />
          </div>
        </div>

        <motion.p custom={1} initial="hidden" animate="show" variants={fadeUp} className="font-mono text-sm text-muted mt-10">
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

        <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 bg-accent text-bg rounded-full px-7 py-3.5 text-base font-semibold"
          >
            View My Work
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
          <motion.a
            href={person.resumeUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 border border-ink/25 text-ink rounded-full px-7 py-3.5 text-base font-semibold hover:bg-ink hover:text-bg transition-colors"
          >
            Download Resume
            <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}