import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import Timeline from '@/components/about/Timeline'
import TechStack from '@/components/about/TechStack'
import Education from '@/components/about/Education'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <TechStack />
      <Education />
    </>
  )
}
