export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
}

export type Experience = {
  id: number
  position: string
  company: string
  period: string
  image?: string
  link?: string
}
