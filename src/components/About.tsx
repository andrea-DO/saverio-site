import { Section } from './Section'
import { Profile } from '../lib/types'

export function About({ profile }: { profile: Profile }) {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <img 
            src="/assets/logos/saverio.png" 
            alt="Saverio Filippelli Logo" 
            className="h-48 lg:h-64 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="glass-card rounded-2xl p-8 flex-1">
          <p className="text-slate-100 text-lg leading-relaxed">
            {profile.about}
          </p>
        </div>
      </div>
    </Section>
  )
}
