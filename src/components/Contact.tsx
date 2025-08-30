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
      <div className="grid gap-6 sm:grid-cols-2">
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-200">Name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-md border border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm placeholder-slate-500 dark:placeholder-slate-400" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-slate-800 dark:text-slate-200">Topic</label>
            <input id="topic" name="topic" required className="mt-1 w-full rounded-md border border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm placeholder-slate-500 dark:placeholder-slate-400" placeholder="Project topic" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-800 dark:text-slate-200">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm placeholder-slate-500 dark:placeholder-slate-400" placeholder="Tell me about your project" />
          </div>
          <div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-white font-medium hover:bg-brand-dark active:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Send</button>
          </div>
        </form>
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">Social</h3>
          <ul className="mt-2 grid gap-2">
            {profile.socials.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.url}
                  className="text-brand font-medium hover:underline"
                  {...(s.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
