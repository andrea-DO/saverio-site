import { Section } from './Section'
import { FeaturedPost } from '../lib/types'

export function Featured({ posts }: { posts: FeaturedPost[] }) {
  return (
    <Section id="featured" title="Featured">
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <article key={p.title} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 p-4 shadow">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              {p.description && <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>}
            <div className="mt-2 text-xs text-slate-700 dark:text-slate-300 flex gap-2">
              {p.date && <span>{p.date}</span>}
              {p.link && <a href={p.link} className="text-brand font-medium hover:underline">View</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
