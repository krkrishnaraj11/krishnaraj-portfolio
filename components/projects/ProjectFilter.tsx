'use client'

import { cn } from '@/lib/utils'

const categories = ['All', 'Banking', 'Fintech', 'Mobile', 'Web']

interface ProjectFilterProps {
  active: string
  onFilter: (cat: string) => void
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={cn(
            'font-mono font-bold text-[0.68rem] uppercase tracking-wider px-5 py-2 rounded-full border transition-all duration-300',
            active === cat
              ? 'bg-accent-lime text-bg-primary border-accent-lime'
              : 'bg-transparent text-text-muted border-border-DEFAULT hover:border-border-hover'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
