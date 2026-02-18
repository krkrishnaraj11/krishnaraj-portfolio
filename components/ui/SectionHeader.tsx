'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface SectionHeaderProps {
  tag: string
  title: string
  rightContent?: React.ReactNode
}

export default function SectionHeader({ tag, title, rightContent }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="flex items-end justify-between mb-12"
    >
      <div>
        <p className="font-mono font-bold text-[0.7rem] text-accent-pink uppercase tracking-[0.2em] mb-3">
          {tag}
        </p>
        <h2 className="font-display font-extrabold text-text-primary leading-[1.05] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          {title}
        </h2>
      </div>
      {rightContent && <div>{rightContent}</div>}
    </motion.div>
  )
}
