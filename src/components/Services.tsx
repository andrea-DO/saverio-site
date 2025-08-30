import { Section } from './Section'

export function Services({ services }: { services: string[] }) {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-4 shadow">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{s}</h3>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">Professional service tailored to your needs.</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
