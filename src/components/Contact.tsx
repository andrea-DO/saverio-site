import { Section } from './Section'
import { Profile } from '../lib/types'

export function Contact({ profile }: { profile: Profile }) {
  const email = profile.socials.find((s) => s.platform === 'Email')?.url?.replace('mailto:', '') ?? 'hello@example.com'
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`[Portfolio] ${form.get('name')} – ${form.get('topic')}`)
    const body = encodeURIComponent(`${form.get('message')}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">💌</span>
            Get in Touch
          </h3>
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">Name</label>
              <input 
                id="name" 
                name="name" 
                required 
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white shadow-sm placeholder-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/50 transition-all outline-none" 
                placeholder="Your name" 
              />
            </div>
            <div>
              <label htmlFor="topic" className="block text-sm font-semibold text-slate-200 mb-2">Topic</label>
              <input 
                id="topic" 
                name="topic" 
                required 
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white shadow-sm placeholder-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/50 transition-all outline-none" 
                placeholder="Project topic" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                required 
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white shadow-sm placeholder-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/50 transition-all outline-none resize-none" 
                placeholder="Tell me about your project" 
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-neon-purple px-6 py-4 text-white font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 neon-glow"
              >
                <span>Send Message</span>
                <span>✨</span>
              </button>
            </div>
          </div>
        </form>
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            Connect With Me
          </h3>
          <ul className="grid gap-4">
            {profile.socials.map((s, idx) => (
              <li 
                key={s.platform}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <a
                  href={s.url}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-brand/50 hover:scale-105 transition-all duration-300 no-underline group"
                  {...(s.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="text-2xl">{getSocialIcon(s.platform)}</span>
                  <span className="group-hover:text-brand-light transition-colors">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function getSocialIcon(platform: string): string {
  const icons: Record<string, string> = {
    'Email': '📧',
    'LinkedIn': '💼',
    'GitHub': '👨‍💻',
    'Twitter': '🐦',
    'Instagram': '📸',
    'Facebook': '👥',
    'WhatsApp': '💬',
    'Phone': '📞',
  }
  return icons[platform] || '🔗'
}
