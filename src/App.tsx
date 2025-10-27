import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Featured } from './components/Featured'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Certifications } from './components/Certifications'
import { profile } from './data/profile'
import { SEO } from './components/SEO'

export default function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  <SEO title={`${profile.name} | Audiovisual Translator ES>IT`} description={profile.headline} />
      <NavBar />
  <main id="content" className="min-h-screen">
        <Hero profile={profile} />
        <About profile={profile} />
        <Featured posts={profile.featuredPosts} />
        <Services services={profile.services} />
        <Skills skills={profile.skills} languages={profile.languages} />
        <Experience experiences={profile.experiences} />
        <Education education={profile.education} />
        <Certifications certifications={profile.certifications} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </div>
  )
}
