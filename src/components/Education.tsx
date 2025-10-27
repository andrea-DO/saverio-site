import { Section } from './Section'
import { Timeline, TimelineItem } from './Timeline'
import { EducationItem } from '../lib/types'

const schoolLogos: Record<string, string> = {
  'Universidad de Cádiz & ISTRAD': '/assets/logos/uca.png',
}

export function Education({ education }: { education: EducationItem[] }) {
  return (
    <Section id="education" title="Education">
      <Timeline>
        {education.map((e) => (
          <TimelineItem key={`${e.school}-${e.degree}-${e.start}`} title={`${e.degree}, ${e.school}`} start={e.start} end={e.end}>
            {schoolLogos[e.school] && (
              <div className="mb-4">
                <img 
                  src={schoolLogos[e.school]} 
                  alt={e.school} 
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            )}
            {e.details && (
              <ul className="list-disc pl-5 space-y-2 text-slate-200">
                {e.details.map((d, idx) => <li key={idx} className="leading-relaxed">{d}</li>)}
              </ul>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
