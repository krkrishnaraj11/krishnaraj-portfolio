'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-bg-primary/85 backdrop-blur-[20px] border-b-2 border-border-DEFAULT flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="font-display font-extrabold text-[1.3rem] text-white">
          KRISHNARAJ<span className="text-accent-lime">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-mono text-[0.72rem] uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-all duration-300',
                isActive(link.href)
                  ? 'bg-accent-lime text-bg-primary font-bold'
                  : 'text-text-muted hover:text-text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[1.5px] bg-white" />
          <span className="block w-6 h-[1.5px] bg-white" />
          <span className="block w-6 h-[1.5px] bg-white" />
        </button>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  )
}
