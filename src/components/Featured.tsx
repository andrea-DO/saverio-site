import { useState } from 'react'
import { Section } from './Section'
import { FeaturedPost } from '../lib/types'
import { ImageModal } from './ImageModal'

export function Featured({ posts }: { posts: FeaturedPost[] }) {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <Section id="featured" title="Featured Projects">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <article 
              key={p.title} 
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {p.image && (
                <div 
                  className="aspect-video w-full overflow-hidden bg-gradient-to-br from-brand/20 to-neon-purple/20 cursor-zoom-in relative"
                  onClick={() => setModalImage({ src: p.image!, alt: p.title })}
                >
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                {p.description && <p className="text-slate-300 leading-relaxed">{p.description}</p>}
                <div className="mt-4 flex items-center justify-between text-sm">
                  {p.date && <span className="text-accent-light font-medium">{p.date}</span>}
                  {p.link && (
                    <a 
                      href={p.link} 
                      className="inline-flex items-center gap-2 text-brand-light font-semibold hover:text-white transition-colors no-underline group/link"
                    >
                      View Project
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
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
