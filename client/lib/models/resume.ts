declare module Resumes {
  export interface Networks {
    id: number
    linkedin: string
    github: string
    gitlab: string
    customWebsite: string
  }

  export interface Location {
    id: number
    address: string
    postalCode: string
    city: string
    country: string
    customWebsite?: any
  }

  export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path?: any
    url: string
  }

  export interface Formats {
    thumbnail: Thumbnail
  }

  export interface ProfilePhoto {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: any
    provider: string
    provider_metadata?: any
    created_at: Date
    updated_at: Date
  }

  export interface Basics {
    id: number
    lastName: string
    titleAfter: string
    phone: string
    titleBefore: string
    firstName: string
    email: string
    summary: string
    networks: Networks
    location: Location
    profilePhoto: ProfilePhoto
  }

  export interface WorkExperience {
    id: number
    company: string
    position: string
    website: string
    startDate: string
    endDate: string
    summary: string
    usedTechnologies: string
    stillWorks: boolean
  }

  export interface Education {
    id: number
    institution: string
    area: string
    degree: string
    startDate: string
    endDate?: any
    activitiesAndSocietiess: string
    stillStudy: boolean
  }

  export interface Course {
    id: number
    name: string
    website: string
    place: string
    certificate: boolean
  }

  export interface Skill {
    id: number
    name: string
    level: string
    technologies: string
  }

  export interface Reference {
    id: number
    name: string
    company: string
    position: string
    reference: string
  }

  export interface Language {
    id: number
    language: string
    fluency: string
  }

  export interface Interest {
    id: number
    name: string
  }

  export interface Resume {
    id: number
    uid: string
    published_at: Date
    created_at: Date
    updated_at: Date
    basics: Basics
    workExperience: WorkExperience[]
    education: Education[]
    course: Course[]
    skill: Skill[]
    reference: Reference[]
    language: Language[]
    interest: Interest[]
  }
}
