import { Section } from './Section'

export function Skills({ skills, languages }: { skills: string[]; languages: { name: string; proficiency: string }[] }) {
  return (
    <Section id="skills" title="Skills & Languages">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">💻</span>
            Technical Skills
          </h3>
          <ul className="flex flex-wrap gap-3">
            {skills.map((s, idx) => (
              <li 
                key={s} 
                className="px-4 py-2 rounded-full bg-gradient-to-r from-brand/20 to-neon-purple/20 border border-brand/30 text-sm text-white font-medium hover:scale-110 hover:border-brand transition-all duration-300 cursor-default"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            Languages
          </h3>
          <ul className="grid gap-4">
            {languages.map((l, idx) => (
              <li 
                key={l.name} 
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-lg font-semibold text-white">{l.name}</span>
                <span className="text-sm text-accent-light font-medium">{l.proficiency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
