import { ReactNode } from 'react'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section">
      <div className="container">
  <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}
