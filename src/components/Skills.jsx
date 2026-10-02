import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiMysql, SiHtml5, SiCss, SiTailwindcss,
  SiBootstrap, SiSocketdotio, SiGithub, SiPostman, SiFigma,
  SiJsonwebtokens,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { skills } from '../data/content'
import AmbientBackground from './AmbientBackground'

const iconMap = {
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  socketio: SiSocketdotio,
  github: SiGithub,
  postman: SiPostman,
  figma: SiFigma,
  jwt: SiJsonwebtokens,
}

function SkillCard({ name, icon: Icon }) {
  return (
    <div className="flex items-center gap-3.5 shrink-0 bg-surface border border-border rounded-full pl-3.5 pr-6 py-3.5">
      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-bg border border-border text-ink">
        <Icon size={20} />
      </span>
      <span className="text-base font-medium text-ink whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function Skills() {
  const track = [...skills, ...skills]

  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <AmbientBackground variant="squares" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="eyebrow mb-5 text-sm">
            <div className="eyebrow mb-5">skills.</div>
          </div>
          <h2 className="font-display text-4xl md:text-6xl">Technologies I work with</h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />

        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused] w-max">
          {track.map((s, i) => (
            <SkillCard key={`${s.key}-${i}`} name={s.name} icon={iconMap[s.key]} />
          ))}
        </div>
      </div>
    </section>
  )
}