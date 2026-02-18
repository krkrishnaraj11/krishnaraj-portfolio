'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/animations'

interface PhotoFrameProps {
  src: string
  alt: string
  showCaption?: boolean
  captionName?: string
  captionLocation?: string
  showDecor?: boolean
}

export default function PhotoFrame({ src, alt, showCaption, captionName, captionLocation, showDecor }: PhotoFrameProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      className="relative w-[420px] max-w-full mx-auto"
    >
      <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border-2 border-border-DEFAULT hover:border-accent-lime hover:shadow-[0_0_60px_rgba(184,255,87,0.1)] transition-all duration-500 group">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top contrast-[1.05] brightness-[0.95] group-hover:contrast-[1.1] group-hover:brightness-100 group-hover:scale-[1.02] transition-all duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/90"
          style={{ background: 'linear-gradient(transparent 50%, rgba(12,12,12,0.6) 85%, rgba(12,12,12,0.9) 100%)' }} />
        {showCaption && (
          <div className="absolute bottom-6 left-6 z-10">
            <p className="font-display font-bold text-[1.1rem] text-white">{captionName}</p>
            <p className="font-mono text-[0.6rem] text-accent-lime uppercase">{captionLocation}</p>
          </div>
        )}
      </div>

      {showDecor && (
        <>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="absolute -top-6 -right-6 w-20 h-20 border-2 border-accent-lime rounded-2xl opacity-40 hidden md:block"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            className="absolute -bottom-8 -left-8 w-[100px] h-[100px] border-2 border-accent-pink rounded-full opacity-30 hidden md:block"
          />
          <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 flex flex-col gap-2 hidden md:flex">
            {['bg-accent-cyan', 'bg-accent-lime', 'bg-accent-pink', 'bg-accent-orange'].map((color, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${color}`} />
            ))}
          </div>
        </>
      )}
    </motion.div>
  )
}
