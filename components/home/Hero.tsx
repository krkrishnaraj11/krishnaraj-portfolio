'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import Button from '@/components/ui/Button'
import PhotoFrame from '@/components/ui/PhotoFrame'

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center px-6 md:px-12 py-20 lg:py-0 overflow-hidden">
      {/* Background blurs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-accent-blue blur-[80px] opacity-[0.12] -top-[100px] right-[20%]" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent-pink blur-[80px] opacity-[0.12] bottom-[5%] left-[10%]" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-accent-lime blur-[80px] opacity-[0.12] top-[30%] -right-[5%]" />

      {/* Photo first on mobile */}
      <div className="lg:hidden mb-12">
        <PhotoFrame
          src="/images/krishnaraj.jpg"
          alt="Krishnaraj Rajendran Nair"
          showCaption
          captionName="Krishnaraj R. Nair"
          captionLocation="Abu Dhabi, UAE"
        />
      </div>

      {/* Left column - Content */}
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-8 h-[2px] bg-accent-lime" />
          <span className="font-mono font-bold text-[0.75rem] text-accent-lime uppercase tracking-[0.15em]">
            Senior Frontend Developer
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="font-display font-extrabold leading-[0.95] tracking-[-0.04em] mb-8"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          I craft digital<br />
          <span className="text-accent-pink">experiences</span><br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #f5f5f0' }}>
            that scale
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.6 }}
          className="font-body font-light text-[1rem] text-text-muted max-w-[480px] leading-[1.7] mb-10"
        >
          7+ years building high-performance web and mobile applications for banking, fintech, and enterprise — from Abu Dhabi to the world.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="/projects">View Projects →</Button>
          <Button variant="outline" href="/contact">Get In Touch</Button>
        </motion.div>
      </div>

      {/* Right column - Photo (desktop) */}
      <div className="hidden lg:block relative z-10">
        <PhotoFrame
          src="/images/krishnaraj.jpg"
          alt="Krishnaraj Rajendran Nair"
          showCaption
          captionName="Krishnaraj R. Nair"
          captionLocation="Abu Dhabi, UAE"
          showDecor
        />
      </div>
    </section>
  )
}
