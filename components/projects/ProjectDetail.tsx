'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import type { Project } from '@/data/projects'

const accentColors = ['border-accent-lime', 'border-accent-pink', 'border-accent-cyan', 'border-accent-orange', 'border-accent-blue']

export default function ProjectDetail({ project, nextProject }: { project: Project; nextProject?: Project }) {
  return (
    <section className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.div variants={fadeUp}>
          <Link href="/projects" className="font-mono text-[0.75rem] text-accent-lime uppercase tracking-wider hover:underline">
            ← All Projects
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6">
          <Badge status={project.status} />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold text-text-primary tracking-[-0.03em] mt-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          {project.title}
        </motion.h1>

        <motion.div variants={fadeUp} className="flex items-center gap-3 mt-4">
          <span className="font-mono text-[0.75rem] text-accent-lime">{project.client}</span>
          <span className="text-text-dim">·</span>
          <span className="font-mono text-[0.75rem] text-text-muted">{project.year}</span>
        </motion.div>

        <motion.p variants={fadeUp} className="font-body font-light text-[1.05rem] text-text-muted leading-[1.75] mt-6">
          {project.description}
        </motion.p>

        {/* Highlights */}
        <motion.div variants={fadeUp} className="mt-12">
          <h2 className="font-display font-bold text-[1.5rem] text-text-primary mb-6">Key Highlights</h2>
          <div className="space-y-4">
            {project.highlights.map((h, i) => (
              <div key={i} className={`flex items-start gap-4 pl-4 border-l-2 ${accentColors[i % accentColors.length]}`}>
                <span className="font-mono text-[0.75rem] text-text-dim mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-body text-[0.9rem] text-text-muted leading-[1.7]">{h}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={fadeUp} className="mt-12">
          <h2 className="font-display font-bold text-[1.5rem] text-text-primary mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="font-mono text-[0.68rem] text-text-muted border border-border-DEFAULT rounded-md px-3 py-1.5 uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {(project.url || project.ios || project.android) && (
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
            {project.url && <Button variant="outline" href={project.url} size="sm">Live URL →</Button>}
            {project.ios && <Button variant="outline" href={project.ios} size="sm">App Store →</Button>}
            {project.android && <Button variant="outline" href={project.android} size="sm">Play Store →</Button>}
          </motion.div>
        )}

        {/* Next Project */}
        {nextProject && (
          <motion.div variants={fadeUp} className="mt-16 pt-8 border-t border-border-DEFAULT">
            <Link href={`/projects/${nextProject.slug}`} className="block group">
              <p className="font-mono text-[0.65rem] text-text-dim uppercase tracking-wider mb-2">Next Project</p>
              <p className="font-display font-bold text-[1.3rem] text-text-primary group-hover:text-accent-lime transition-colors">
                {nextProject.title} →
              </p>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
