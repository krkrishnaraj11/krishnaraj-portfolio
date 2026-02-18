'use client'

const techs = [
  "React", "React Native", "TypeScript", "Next.js", "Redux Toolkit", "GraphQL",
  "Firebase", "Azure MFA", "Jest", "CI/CD", "Vite.js", "MongoDB"
]

const dotColors = ['bg-accent-lime', 'bg-accent-pink', 'bg-accent-cyan', 'bg-accent-orange', 'bg-accent-blue']

export default function TechMarquee() {
  const items = [...techs, ...techs]

  return (
    <div className="border-y-2 border-border-DEFAULT py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <div key={i} className="flex items-center gap-3 mx-6 shrink-0">
            <span className={`w-2 h-2 rounded-full ${dotColors[i % dotColors.length]}`} />
            <span className="font-display font-semibold text-[1.05rem] text-text-muted">
              {tech}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
