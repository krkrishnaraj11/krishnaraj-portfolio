'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInRight } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  links: { href: string; label: string }[]
  pathname: string
}

export default function MobileMenu({ open, onClose, links, pathname }: MobileMenuProps) {
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInRight}
            className="fixed top-0 right-0 z-[70] w-[280px] h-screen bg-bg-elevated border-l border-border-DEFAULT"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
            <div className="flex flex-col gap-6 px-8 pt-20">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'font-mono text-[0.85rem] uppercase tracking-[0.08em] transition-colors',
                    isActive(link.href) ? 'text-accent-lime font-bold' : 'text-text-muted hover:text-text-primary'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
