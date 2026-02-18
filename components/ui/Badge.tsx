import { cn } from '@/lib/utils'

interface BadgeProps {
  status: 'Live' | 'Shipped' | 'NDA' | 'Discontinued'
  className?: string
}

const statusStyles: Record<string, string> = {
  Live: 'bg-accent-lime/10 border-accent-lime/30 text-accent-lime',
  Shipped: 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan',
  NDA: 'bg-accent-orange/10 border-accent-orange/30 text-accent-orange',
  Discontinued: 'bg-transparent border-border-DEFAULT text-text-dim',
}

export default function Badge({ status, className }: BadgeProps) {
  return (
    <span className={cn(
      'font-mono font-bold text-[0.62rem] uppercase tracking-[0.15em] px-3 py-1 rounded-full border inline-block',
      statusStyles[status],
      className
    )}>
      {status}
    </span>
  )
}
