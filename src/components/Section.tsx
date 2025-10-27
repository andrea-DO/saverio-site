import { ReactNode } from 'react'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section">
      <div className="container">
        <h2 id={`${id}-title`} className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text-cyan mb-12">
          {title}
        </h2>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  )
}
