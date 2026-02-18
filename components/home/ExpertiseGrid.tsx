'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'

const cards = [
  { num: '01', icon: '◈', title: 'Frontend Architecture', color: 'bg-accent-lime', desc: 'Modular, scalable frontend systems for complex enterprise applications — from monolith-to-micro-repo migrations to reusable SDK development.' },
  { num: '02', icon: '◎', title: 'React & React Native', color: 'bg-accent-pink', desc: 'Production-grade cross-platform apps with React, React Native, and React Native Web. Deep expertise in Redux, TypeScript, and state management at scale.' },
  { num: '03', icon: '⬡', title: 'Banking & Fintech', color: 'bg-accent-cyan', desc: 'KYC verification, MFA, secure onboarding flows, payment integrations, and regulatory-compliant digital platforms.' },
  { num: '04', icon: '△', title: 'SDK Development', color: 'bg-accent-orange', desc: 'Reusable SDKs for Emirates Face Recognition and Microblink ID scanning — shared across React, React Native, and React Native Web.' },
  { num: '05', icon: '◇', title: 'Performance Optimization', color: 'bg-accent-blue', desc: 'Advanced caching strategies, rendering optimizations, lazy loading, and memory-efficient data structures.' },
  { num: '06', icon: '□', title: 'Testing & CI/CD', color: 'bg-accent-lime', desc: 'Comprehensive test coverage with Jest, React Testing Library, and Enzyme. CI/CD pipelines with zero-regression releases.' },
]

export default function ExpertiseGrid() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <SectionHeader tag="// What I Do" title="Areas of Expertise" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {cards.map((card) => (
          <motion.div
            key={card.num}
            variants={fadeUp}
            className="group bg-bg-elevated border border-border-DEFAULT hover:border-border-hover rounded-[20px] p-9 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 ${card.color} transition-all duration-300`} />
            <p className="font-mono text-[0.65rem] text-[#444] tracking-[0.15em] mb-4">{card.num}</p>
            <p className="text-[1.8rem] mb-5">{card.icon}</p>
            <h3 className="font-display font-bold text-[1.6rem] text-text-primary mb-3">{card.title}</h3>
            <p className="font-body font-light text-[0.88rem] text-text-muted leading-[1.7]">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
