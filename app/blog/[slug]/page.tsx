import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return { title: post.title }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display font-bold text-[1.5rem] text-text-primary mt-12 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display font-semibold text-[1.2rem] text-text-primary mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-[1rem] text-text-muted leading-[1.8] mb-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent-lime hover:underline" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono bg-bg-elevated px-2 py-0.5 rounded text-accent-lime text-sm" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-bg-elevated border border-border-DEFAULT rounded-xl p-6 overflow-x-auto mb-6" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-accent-lime pl-6 italic text-text-muted my-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="text-text-muted space-y-2 mb-6 ml-4 list-disc marker:text-accent-lime" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="text-text-muted space-y-2 mb-6 ml-4 list-decimal marker:text-accent-lime" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="font-body text-[1rem] leading-[1.8]" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium text-text-primary" {...props} />
  ),
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="max-w-[720px] mx-auto px-6 md:px-12 py-16 md:py-20">
      <Link href="/blog" className="font-mono text-[0.75rem] text-accent-lime uppercase tracking-wider hover:underline">
        ← All Posts
      </Link>

      <p className="font-mono text-[0.65rem] text-text-dim uppercase mt-8">{post.date}</p>
      <h1
        className="font-display font-extrabold text-text-primary leading-[1.05] tracking-[-0.03em] mt-3"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        {post.title}
      </h1>

      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags.map((tag) => (
          <span key={tag} className="font-mono text-[0.6rem] text-text-dim border border-border-DEFAULT rounded-md px-2 py-0.5 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <hr className="border-border-DEFAULT my-8" />

      <div>
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  )
}
