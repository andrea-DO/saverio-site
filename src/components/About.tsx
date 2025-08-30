import { Section } from './Section'
import { Profile } from '../lib/types'

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id="about" title="About">
  <p className="text-slate-900 dark:text-slate-100 leading-relaxed">
        {profile.about}
      </p>
    </Section>
  )
}
