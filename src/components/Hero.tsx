import { Badge } from './Badge'
import { Profile } from '../lib/types'

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="hero" className="section relative">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/assets/hero.jpeg"
          alt=""
          className="h-full w-full object-cover opacity-20 dark:opacity-30"
        />
        {/* Light/Dark overlay to ensure text contrast */}
  <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/70" />
      </div>
      <div className="relative container grid gap-8 sm:gap-12 sm:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-slate-800 dark:text-slate-200">
            {profile.headline}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>{profile.location}</Badge>
            <Badge>{profile.availability ?? 'Available for projects'}</Badge>
            <Badge>{`Languages: ${profile.languages.map(l => l.name).join(', ')}`}</Badge>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-white font-medium hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">View Services</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-white font-medium hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Contact</a>
          </div>
        </div>
        <div className="justify-self-center">
          <img src="/assets/profile.jpeg" alt={`${profile.name} portrait`} className="h-40 w-40 sm:h-56 sm:w-56 rounded-full ring-2 ring-brand/20" />
        </div>
      </div>
    </section>
  )
}
