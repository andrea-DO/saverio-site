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
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 h-full w-px bg-slate-300 dark:bg-slate-600" aria-hidden="true"></div>
      <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-brand" aria-hidden="true"></div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
  {subtitle && <p className="text-sm text-slate-800 dark:text-slate-200">{subtitle}</p>}
  <p className="text-xs text-slate-800 dark:text-slate-200 mt-1">{formatDateRange(start, end)}</p>
  {children && <div className="mt-2 text-sm text-slate-800 dark:text-slate-200">{children}</div>}
    </div>
  )
}

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6">
      {children}
    </div>
  )
}
