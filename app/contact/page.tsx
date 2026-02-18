'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { siteConfig } from '@/data/siteConfig'
import ContactForm from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="font-mono font-bold text-[0.7rem] text-accent-pink uppercase tracking-[0.2em] mb-3">
            {"// Get In Touch"}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-text-primary leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Let&apos;s work together
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body font-light text-[1.05rem] text-text-muted leading-[1.75] mb-10">
            Have a project in mind? I&apos;m available for freelance, contract, and consulting work. Let&apos;s talk about what I can build for you.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-5 mb-10">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
              <Mail size={18} className="text-text-dim group-hover:text-accent-lime transition-colors" />
              <span className="font-body text-[0.9rem] text-text-muted group-hover:text-text-primary transition-colors">{siteConfig.email}</span>
            </a>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
              <Phone size={18} className="text-text-dim group-hover:text-accent-lime transition-colors" />
              <span className="font-body text-[0.9rem] text-text-muted group-hover:text-text-primary transition-colors">{siteConfig.phoneDisplay}</span>
            </a>
            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-text-dim" />
              <span className="font-body text-[0.9rem] text-text-muted">{siteConfig.locationShort}</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-3">
            {[
              { label: 'LinkedIn', href: siteConfig.social.linkedin },
              { label: 'GitHub', href: siteConfig.social.github },
              { label: 'GitLab', href: siteConfig.social.gitlab },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.68rem] text-text-muted border border-border-DEFAULT rounded-full px-5 py-2 uppercase tracking-wider hover:border-accent-lime hover:text-accent-lime transition-colors"
              >
                {social.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
