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
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-700">
      <nav className="container flex items-center justify-between py-3">
  <a href="#about" className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Saverio Filippelli</a>
        <button aria-label="Toggle menu" className="sm:hidden p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand" onClick={() => setOpen((v) => !v)}>
          <span className="i">☰</span>
        </button>
        <ul className={classNames(
          'hidden sm:flex gap-4 text-sm font-medium',
          open && 'sm:hidden'
        )}>
      {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={classNames(
        'px-2 py-1 rounded hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand',
        active === s.id ? 'text-brand' : 'text-slate-800 dark:text-slate-200'
              )}>{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
    <div className="sm:hidden border-t border-slate-200 dark:border-slate-700">
          <ul className="container py-2 grid gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={classNames(
      'block px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800',
      active === s.id ? 'text-brand' : 'text-slate-800 dark:text-slate-200'
                )} onClick={() => setOpen(false)}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
