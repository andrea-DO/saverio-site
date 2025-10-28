import { Section } from './Section'

const skillLogos: Record<string, string> = {
  'SDL Trados': '/assets/logos/trados.svg',
  'Aegisub': '/assets/logos/aegisub.png',
  'Subtitle Edit': '/assets/logos/Subtitle Edit.png',
  'Adobe Illustrator': '/assets/logos/illustrator.svg',
  'WordPress': '/assets/logos/wordpress.svg',
}

export function Skills({ skills, languages }: { skills: string[]; languages: { name: string; proficiency: string }[] }) {
  return (
    <Section id="skills" title="Skills & Languages">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">💻</span>
            Technical Skills
          </h3>
          <div className="mb-6 grid grid-cols-5 gap-6 pb-6 border-b border-white/10">
            {Object.entries(skillLogos).map(([name, logo]) => (
              <div key={name} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt={name} 
                    className="max-h-14 max-w-14 w-auto object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span className="text-xs text-slate-400 group-hover:text-white transition-colors text-center">{name}</span>
              </div>
            ))}
          </div>
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
