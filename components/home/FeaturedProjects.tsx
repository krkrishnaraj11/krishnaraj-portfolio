'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'
import Link from 'next/link'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4)

  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <SectionHeader
        tag="// Featured Work"
        title="Selected Projects"
        rightContent={
          <Link href="/projects" className="font-mono text-[0.75rem] text-accent-lime uppercase tracking-wider hover:underline">
            View All →
          </Link>
        }
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  )
}
