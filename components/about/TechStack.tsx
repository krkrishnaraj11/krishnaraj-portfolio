'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { primarySkills, allSkills } from '@/data/skills'

export default function TechStack() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <SectionHeader tag="// Tools & Technologies" title="Tech Stack" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={fadeUp}
        className="flex flex-wrap gap-3"
      >
        {allSkills.map((skill) => {
          const isPrimary = primarySkills.includes(skill)
          return (
            <span
              key={skill}
              className={
                isPrimary
                  ? 'font-mono text-[0.72rem] px-4 py-2 rounded-md border border-accent-lime/30 text-accent-lime bg-accent-lime/5 shadow-[0_0_12px_rgba(184,255,87,0.08)]'
                  : 'font-mono text-[0.72rem] px-4 py-2 rounded-md border border-border-DEFAULT text-text-muted hover:border-accent-lime hover:text-accent-lime transition-colors'
              }
            >
              {skill}
            </span>
          )
        })}
      </motion.div>
    </section>
  )
}
