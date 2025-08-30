export type SocialLink = {
  platform: 'LinkedIn' | 'Email' | 'Twitter' | 'GitHub' | 'Website' | 'Phone'
  label: string
  url: string
}

export type Language = {
  name: string
  proficiency: 'Native or bilingual proficiency' | 'Full professional proficiency' | 'Professional working proficiency' | 'Limited working proficiency' | 'Elementary proficiency'
}

export type ExperienceItem = {
  company: string
  role: string
  employmentType?: string
  start: string
  end?: string
  location?: string
  remote?: boolean
  highlights?: string[]
}

export type EducationItem = {
  school: string
  degree: string
  field?: string
  start?: string
  end?: string
  details?: string[]
}

export type Certification = {
  name: string
  issuer: string
  issued: string
}

export type Volunteer = {
  organization: string
  role: string
  start?: string
  end?: string
  description?: string
}

export type FeaturedPost = {
  title: string
  description?: string
  date?: string
  link?: string
}

export type Profile = {
  name: string
  headline: string
  location: string
  connections: string
  availability?: string
  about: string
  languages: Language[]
  socials: SocialLink[]
  skills: string[]
  services: string[]
  experiences: ExperienceItem[]
  education: EducationItem[]
  certifications: Certification[]
  volunteering: Volunteer[]
  featuredPosts: FeaturedPost[]
}
