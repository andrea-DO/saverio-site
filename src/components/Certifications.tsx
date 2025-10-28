import { Section } from './Section'
import { Badge } from './Badge'
import { Certification } from '../lib/types'

const certLogos: Record<string, string> = {
  'International English Language Testing System (IELTS)': '/assets/logos/ielts.svg',
  'DELE C1': '/assets/logos/Cervantes.png',
}

export function Certifications({ certifications }: { certifications: Certification[] }) {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, idx) => (
          <div
            key={`${cert.name}-${cert.issued}`}
            className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {certLogos[cert.name] && (
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-20 flex items-center justify-center">
                  <img
                    src={certLogos[cert.name]}
                    alt={cert.name}
                    className="max-h-16 max-w-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            )}
            <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
            <div className="space-y-2">
              <Badge>{cert.issuer}</Badge>
              <p className="text-sm text-slate-400">Issued: {cert.issued}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
