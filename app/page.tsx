import Hero from '@/components/home/Hero'
import TechMarquee from '@/components/home/TechMarquee'
import ExpertiseGrid from '@/components/home/ExpertiseGrid'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ExpertiseGrid />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
