'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

const education = [
  { school: 'LBS College of Engineering', degree: 'BTech CSE', location: 'Kasaragod', year: '2012–2017' },
  { school: 'Capital University Jharkhand', degree: 'BTech CSE (Credit Transfer)', location: 'Jharkhand', year: '2018–2020' },
]

export default function Education() {
  return (
    <>
      <section className="px-6 md:px-12 py-16 md:py-24">
        <SectionHeader tag="// Education" title="Academic Background" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              variants={fadeUp}
              className="bg-bg-elevated border border-border-DEFAULT rounded-[20px] p-8"
            >
              <h3 className="font-display font-bold text-[1.2rem] text-text-primary">{edu.school}</h3>
              <p className="font-body text-[0.88rem] text-text-muted mt-2">{edu.degree}</p>
              <p className="font-mono text-[0.65rem] text-text-dim uppercase tracking-wider mt-2">
                {edu.location} · {edu.year}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Languages */}
      <section className="px-6 md:px-12 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="font-mono font-bold text-[0.7rem] text-accent-pink uppercase tracking-[0.2em] mb-4">{"// Languages"}</p>
          <div className="flex flex-wrap gap-2">
            {siteConfig.languages.map((lang) => (
              <span key={lang} className="font-mono text-[0.72rem] px-4 py-2 rounded-md border border-border-DEFAULT text-text-muted">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Resume Download */}
      <section className="px-6 md:px-12 py-16 md:py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Button href="/resume/Krishnaraj_Resume.pdf">Download Resume</Button>
        </motion.div>
      </section>
    </>
  )
}
