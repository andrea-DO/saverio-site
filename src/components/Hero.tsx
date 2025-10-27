import { Badge } from './Badge'
import { Profile } from '../lib/types'

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="hero" className="section relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-neon-purple/10 to-accent/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative container grid gap-12 lg:grid-cols-2 items-center z-10">
        <div className="animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm font-medium text-accent-light">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-slate-300 font-light leading-relaxed">
            {profile.headline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge>{profile.location}</Badge>
            <Badge>{profile.availability ?? 'Available for projects'}</Badge>
            <Badge>{`Languages: ${profile.languages.map(l => l.name).join(', ')}`}</Badge>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a 
              href="#services" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-brand to-brand-light rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl neon-glow no-underline"
            >
              <span className="relative z-10">View Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-light to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white glass rounded-xl hover:scale-105 transition-all duration-300 hover:border-accent-light no-underline"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="justify-self-center lg:justify-self-end animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand via-neon-purple to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
            <img 
              src="/assets/profile.jpeg" 
              alt={`${profile.name} portrait`} 
              className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full ring-4 ring-brand/30 shadow-2xl object-cover animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
