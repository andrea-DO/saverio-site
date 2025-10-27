import { Section } from './Section'
import { Profile } from '../lib/types'

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id="about" title="About">
      <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
        <p className="text-slate-100 text-lg leading-relaxed">
          {profile.about}
        </p>
      </div>
    </Section>
  )
}
