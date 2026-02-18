import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import BlogListClient from './BlogListClient'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <h1
        className="font-display font-extrabold text-text-primary tracking-[-0.03em]"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
      >
        Blog
      </h1>
      <p className="font-body text-text-muted text-[1rem] mt-4 max-w-[600px]">
        Thoughts on frontend architecture, React ecosystems, and building at scale.
      </p>

      <div className="mt-12">
        <BlogListClient posts={posts} />
      </div>
    </section>
  )
}
