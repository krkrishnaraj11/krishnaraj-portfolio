'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import BlogCard from '@/components/blog/BlogCard'
import type { BlogPost } from '@/lib/mdx'

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {posts.length === 0 ? (
        <p className="font-body text-text-muted">No posts yet. Check back soon!</p>
      ) : (
        posts.map((post) => <BlogCard key={post.slug} post={post} />)
      )}
    </motion.div>
  )
}
