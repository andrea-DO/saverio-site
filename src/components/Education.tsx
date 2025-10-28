import { Section } from './Section'
import { Timeline, TimelineItem } from './Timeline'
import { EducationItem } from '../lib/types'

const schoolLogos: Record<string, string> = {
  'Universidad de Cádiz & ISTRAD': '/assets/logos/uca.png',
  'Università per Stranieri di Siena': '/assets/logos/unistrasi.png',
  'Universidad de Castilla-La Mancha': '/assets/logos/UCLM.png',
  'Università degli Studi di Siena': '/assets/logos/UNISI.png',
  'Trágora Formación - Spin-off de la UGR': '/assets/logos/trados.svg',
}

export function Education({ education }: { education: EducationItem[] }) {
  return (
    <Section id="education" title="Education">
      <Timeline>
        {education.map((e) => (
          <TimelineItem key={`${e.school}-${e.degree}-${e.start}`} title={`${e.degree}, ${e.school}`} start={e.start} end={e.end}>
            {schoolLogos[e.school] && (
              <div className="mb-6 flex items-center">
                <div className="w-32 h-16 flex items-center justify-start">
                  <img 
                    src={schoolLogos[e.school]} 
                    alt={e.school} 
                    className="max-h-14 max-w-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
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
