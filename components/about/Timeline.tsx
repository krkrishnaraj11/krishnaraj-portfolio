'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import { experience } from '@/data/experience'

export default function Timeline() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <SectionHeader tag="// Career Path" title="Experience" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="relative ml-4 border-l border-border-DEFAULT"
      >
        {experience.map((exp, i) => (
          <motion.div key={i} variants={fadeUp} className="relative pl-8 pb-12 last:pb-0">
            <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] rounded-full bg-accent-lime shadow-[0_0_12px_rgba(184,255,87,0.4)]" />
            <p className="font-mono text-[0.75rem] text-accent-lime uppercase mb-1">{exp.date}</p>
            <h3 className="font-display font-bold text-[1.3rem] text-text-primary">{exp.role}</h3>
            <p className="font-body text-[0.85rem] text-text-muted mt-0.5">
              {exp.company} · {exp.location}
            </p>
            <p className="font-body font-light text-[0.88rem] text-text-muted leading-[1.7] mt-3">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
