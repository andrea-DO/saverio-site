import { ReactNode } from 'react'

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand/20 to-neon-purple/20 border border-brand/30 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm hover:scale-105 transition-transform duration-300">
      {children}
    </span>
  )
}
