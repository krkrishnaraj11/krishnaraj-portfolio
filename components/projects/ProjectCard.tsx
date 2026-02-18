'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { Project } from '@/data/projects'

const accentBgMap: Record<string, string> = {
  lime: 'bg-accent-lime',
  pink: 'bg-accent-pink',
  cyan: 'bg-accent-cyan',
  orange: 'bg-accent-orange',
  blue: 'bg-accent-blue',
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/projects/${project.slug}`} className="block group">
        <div className="bg-bg-elevated border border-border-DEFAULT hover:border-border-hover rounded-[20px] p-9 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 ${accentBgMap[project.accentColor]} transition-all duration-300`} />
          <p className="font-mono text-[0.65rem] text-[#444] tracking-[0.15em] mb-4">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="font-display font-bold text-[1.6rem] text-text-primary mb-1">{project.title}</h3>
          <p className="font-mono text-[0.72rem] text-accent-lime mb-4">{project.client}</p>
          <p className="font-body font-light text-[0.88rem] text-text-muted leading-[1.7] mb-6">{project.description}</p>
          <div className="pt-6 border-t border-border-DEFAULT flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="font-mono text-[0.65rem] text-text-muted border border-border-DEFAULT rounded-md px-2.5 py-1 uppercase tracking-wider">
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="font-mono text-[0.65rem] text-text-dim px-2.5 py-1">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
