import { Section } from './Section'

export function Services({ services }: { services: string[] }) {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <article 
            key={s} 
            className="glass-card rounded-2xl p-6 group hover:scale-105"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-4xl mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300">
              {idx % 4 === 0 ? '🚀' : idx % 4 === 1 ? '💡' : idx % 4 === 2 ? '⚡' : '🎯'}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{s}</h3>
            <p className="text-slate-300 leading-relaxed">Professional service tailored to your needs with cutting-edge solutions.</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
