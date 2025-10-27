import { useEffect, useState } from 'react'
import { classNames } from '../lib/utils'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'featured', label: 'Featured' },
  { id: 'contact', label: 'Contact' },
]

export function NavBar() {
  const [active, setActive] = useState<string>('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 1] }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <nav className="container flex items-center justify-between py-4">
        <a href="#about" className="text-lg font-bold tracking-tight gradient-text no-underline hover:no-underline">
          Saverio Filippelli
        </a>
        <button 
          aria-label="Toggle menu" 
          className="sm:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors" 
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
        <ul className={classNames(
          'hidden sm:flex gap-1 text-sm font-medium',
          open && 'sm:hidden'
        )}>
          {sections.map((s) => (
            <li key={s.id}>
              <a 
                href={`#${s.id}`} 
                className={classNames(
                  'px-4 py-2 rounded-lg transition-all duration-300 no-underline',
                  active === s.id 
                    ? 'bg-brand/20 text-brand-light font-semibold shadow-lg' 
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-white/10 animate-slide-up">
          <ul className="container py-3 grid gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a 
                  href={`#${s.id}`} 
                  className={classNames(
                    'block px-4 py-3 rounded-lg transition-all duration-300 no-underline',
                    active === s.id 
                      ? 'bg-brand/20 text-brand-light font-semibold' 
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  )} 
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
