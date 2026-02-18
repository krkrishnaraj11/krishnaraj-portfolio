'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import type { BlogPost } from '@/lib/mdx'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/blog/${post.slug}`} className="block group border-b border-border-DEFAULT py-8 hover:translate-x-2 transition-transform duration-300">
        <p className="font-mono text-[0.65rem] text-text-dim uppercase mb-2">{post.date}</p>
        <h3 className="font-display font-bold text-[1.4rem] text-text-primary group-hover:text-accent-lime transition-colors">
          {post.title}
        </h3>
        <p className="font-body font-light text-[0.9rem] text-text-muted mt-2 line-clamp-2">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag) => (
            <span key={tag} className="font-mono text-[0.6rem] text-text-dim border border-border-DEFAULT rounded-md px-2 py-0.5 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
