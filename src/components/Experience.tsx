import { Section } from './Section'
import { Timeline, TimelineItem } from './Timeline'
import { ExperienceItem } from '../lib/types'

export function Experience({ experiences }: { experiences: ExperienceItem[] }) {
  return (
    <Section id="experience" title="Experience">
      <Timeline>
        {experiences.map((e) => (
          <TimelineItem key={`${e.company}-${e.role}-${e.start}`} title={`${e.role} · ${e.company}`} subtitle={[e.employmentType, e.location, e.remote ? 'Remote' : ''].filter(Boolean).join(' · ')} start={e.start} end={e.end}>
            <ul className="list-disc pl-5 space-y-1 text-slate-800 dark:text-slate-200">
              {e.highlights?.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
