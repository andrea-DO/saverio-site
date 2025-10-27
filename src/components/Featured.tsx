import { useState } from 'react'
import { Section } from './Section'
import { FeaturedPost } from '../lib/types'
import { ImageModal } from './ImageModal'

export function Featured({ posts }: { posts: FeaturedPost[] }) {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <Section id="featured" title="Featured Projects">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {p.image && (
                <div 
                  className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-700 cursor-zoom-in"
                  onClick={() => setModalImage({ src: p.image!, alt: p.title })}
                >
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                {p.description && <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>}
                <div className="mt-3 text-xs text-slate-600 dark:text-slate-400 flex gap-2">
                  {p.date && <span>{p.date}</span>}
                  {p.link && <a href={p.link} className="text-brand font-medium hover:underline">View →</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      
      <ImageModal 
        isOpen={!!modalImage}
        imageSrc={modalImage?.src || ''}
        imageAlt={modalImage?.alt || ''}
        onClose={() => setModalImage(null)}
      />
    </>
  )
}
