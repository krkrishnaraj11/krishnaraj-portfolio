import { projects } from '@/data/projects'
import ProjectDetail from '@/components/projects/ProjectDetail'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}
  return { title: project.title }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex(p => p.slug === params.slug)
  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return <ProjectDetail project={project} nextProject={nextProject} />
}
