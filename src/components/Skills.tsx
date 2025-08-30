import { Section } from './Section'

export function Skills({ skills, languages }: { skills: string[]; languages: { name: string; proficiency: string }[] }) {
  return (
    <Section id="skills" title="Skills & Languages">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Skills</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100">{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Languages</h3>
          <ul className="mt-2 grid gap-1">
            {languages.map((l) => (
              <li key={l.name} className="text-sm text-slate-800 dark:text-slate-200">{l.name} — {l.proficiency}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
