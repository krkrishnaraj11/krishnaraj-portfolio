'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import PhotoFrame from '@/components/ui/PhotoFrame'

const stats = [
  { value: '7+', label: 'Years Exp', color: 'text-accent-lime' },
  { value: '15+', label: 'Apps Built', color: 'text-accent-pink' },
  { value: '5', label: 'Countries', color: 'text-accent-cyan' },
]

export default function AboutHero() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-[380px] mx-auto flex items-center justify-center">
          <PhotoFrame
            src="/images/krishnaraj.jpg"
            alt="Krishnaraj Rajendran Nair"
            showCaption
            captionName="Krishnaraj R. Nair"
            captionLocation="Abu Dhabi, UAE"
            showDecor
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="font-mono font-bold text-[0.7rem] text-accent-pink uppercase tracking-[0.2em] mb-3">
            {"// About Me"}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-text-primary leading-[1.05] tracking-[-0.03em] mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Frontend architect with a passion for scale
          </motion.h1>

          <motion.div variants={fadeUp} className="space-y-5 mb-10">
            <p className="font-body font-light text-[1.05rem] text-text-muted leading-[1.75]">
              I&apos;m Krishnaraj Rajendran Nair — a Senior Frontend Developer based in Abu Dhabi with over 7 years of hands-on experience designing, developing, and optimizing scalable web and mobile applications.
            </p>
            <p className="font-body font-light text-[1.05rem] text-text-muted leading-[1.75]">
              I specialize in the React ecosystem — React, React Native, Next.js, and React Native Web — building enterprise-grade platforms for banking, fintech, and consumer markets. From leading ADCB&apos;s Private Banking and Tesla AutoLoan platforms to shipping 15+ production apps across 5 countries, I bring architectural precision and pixel-perfect execution.
            </p>
            <p className="font-body font-light text-[1.05rem] text-text-muted leading-[1.75]">
              Currently open to freelance, contract, and consulting opportunities where I can help teams build scalable frontend architectures and deliver production-grade applications.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className={`font-display font-extrabold text-[2.5rem] ${stat.color}`}>{stat.value}</p>
                <p className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.12em]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
