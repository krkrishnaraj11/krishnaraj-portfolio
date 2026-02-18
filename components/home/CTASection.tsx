'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/data/siteConfig'

export default function CTASection() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="font-mono font-bold text-[0.7rem] text-accent-pink uppercase tracking-[0.2em] mb-4">
          {"// Say Hello"}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-extrabold text-text-primary leading-[1.05] tracking-[-0.03em] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Let&apos;s build<br />something <span className="text-accent-lime">wild</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="font-body text-text-muted text-[1rem] mb-10">
          Available for freelance, contract & consulting.
        </motion.p>
        <motion.div variants={fadeUp} className="mb-8">
          <Button href="/contact">Start a Conversation →</Button>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
          <Button variant="ghost" href={`mailto:${siteConfig.email}`} size="sm">Email</Button>
          <Button variant="ghost" href={`tel:${siteConfig.phone}`} size="sm">Phone</Button>
          <Button variant="ghost" href={siteConfig.social.linkedin} size="sm">LinkedIn</Button>
          <Button variant="ghost" href={siteConfig.social.github} size="sm">GitHub</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
