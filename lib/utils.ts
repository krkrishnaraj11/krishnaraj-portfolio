export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export const accentColorMap: Record<string, string> = {
  lime: 'accent-lime',
  pink: 'accent-pink',
  cyan: 'accent-cyan',
  orange: 'accent-orange',
  blue: 'accent-blue',
}

export const accentBgMap: Record<string, string> = {
  lime: 'bg-accent-lime',
  pink: 'bg-accent-pink',
  cyan: 'bg-accent-cyan',
  orange: 'bg-accent-orange',
  blue: 'bg-accent-blue',
}
