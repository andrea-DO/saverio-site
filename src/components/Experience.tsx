import { Section } from './Section'
import { Timeline, TimelineItem } from './Timeline'
import { ExperienceItem } from '../lib/types'

const companyLogos: Record<string, string> = {
  'Concentrix': '/assets/logos/salesforce.svg',
  'Just Eat Takeaway.com': '/assets/logos/just-eat.png',
  'Translatium Multilingual Services SL': '/assets/logos/trados.svg',
}

export function Experience({ experiences }: { experiences: ExperienceItem[] }) {
  return (
    <Section id="experience" title="Experience">
      <Timeline>
        {experiences.map((e) => (
          <TimelineItem key={`${e.company}-${e.role}-${e.start}`} title={`${e.role} · ${e.company}`} subtitle={[e.employmentType, e.location, e.remote ? 'Remote' : ''].filter(Boolean).join(' · ')} start={e.start} end={e.end}>
            {companyLogos[e.company] && (
              <div className="mb-4">
                <img 
                  src={companyLogos[e.company]} 
                  alt={e.company} 
                  className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            )}
            <ul className="list-disc pl-5 space-y-2 text-slate-200">
              {e.highlights?.map((h, idx) => (
                <li key={idx} className="leading-relaxed">{h}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
