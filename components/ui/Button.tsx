import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const sizeStyles = {
  sm: 'px-6 py-2.5 text-[0.7rem]',
  md: 'px-8 py-3.5 text-[0.78rem]',
  lg: 'px-10 py-4 text-[0.82rem]',
}

const variantStyles = {
  primary: 'bg-accent-lime text-bg-primary font-mono font-bold uppercase tracking-wider rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,255,87,0.25)] transition-all duration-300',
  outline: 'bg-transparent text-text-primary border border-border-hover font-mono uppercase tracking-wider rounded-full hover:border-text-primary transition-all duration-300',
  ghost: 'bg-transparent text-text-muted font-mono uppercase tracking-wider rounded-full border border-border-DEFAULT hover:border-accent-lime hover:text-accent-lime hover:bg-accent-lime/5 transition-all duration-300',
}

export default function Button({ variant = 'primary', size = 'md', href, children, className, type = 'button', onClick }: ButtonProps) {
  const styles = cn(variantStyles[variant], sizeStyles[size], className)

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
