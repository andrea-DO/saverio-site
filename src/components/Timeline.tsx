import { ReactNode } from 'react'
import { formatDateRange } from '../lib/utils'

export function TimelineItem({
  title,
  subtitle,
  start,
  end,
  children,
}: {
  title: string
  subtitle?: string
  start?: string
  end?: string
  children?: ReactNode
}) {
  return (
    <div className="relative pl-10 group">
      <div className="absolute left-0 top-4 h-full w-0.5 bg-gradient-to-b from-brand via-neon-purple to-transparent" aria-hidden="true"></div>
      <div className="absolute left-[-8px] top-4 h-5 w-5 rounded-full bg-gradient-to-br from-brand to-neon-purple ring-4 ring-brand/20 group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></div>
      <div className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-slate-300 mt-2">{subtitle}</p>}
        <p className="text-xs text-accent-light font-medium mt-2 flex items-center gap-2">
          <span>📅</span>
          {formatDateRange(start, end)}
        </p>
        {children && <div className="mt-4 text-slate-200">{children}</div>}
      </div>
    </div>
  )
}

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-8 max-w-4xl mx-auto">
      {children}
    </div>
  )
}
