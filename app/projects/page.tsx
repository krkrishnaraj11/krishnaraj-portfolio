'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectFilter from '@/components/projects/ProjectFilter'
export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="font-display font-extrabold text-text-primary tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          Projects
        </h1>
        <p className="font-body text-text-muted text-[1rem] mt-4 max-w-[600px]">
          A selection of work across banking, fintech, EV, and consumer apps.
        </p>
        <ProjectFilter active={filter} onFilter={setFilter} />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
