import { ReactNode } from 'react'

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-900/60 px-3 py-1 text-xs font-medium text-indigo-800 dark:text-indigo-100 ring-1 ring-inset ring-indigo-600/20">
      {children}
    </span>
  )
}
