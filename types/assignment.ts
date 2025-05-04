export type AssignmentType = "report" | "interactive" | "visualization" | "demo" | "api"

export interface AssignmentTag {
  name: string
  category?: string
}

export interface AssignmentSystem {
  type: "iframe" | "api" | "notebook" | "app"
  url?: string
  apiEndpoint?: string
  description: string
  technologies: string[]
  requiresBackend: boolean
  demoAvailable: boolean
}

export interface Assignment {
  id: string
  title: string
  slug: string
  description: string
  date: string
  category: string
  tags: AssignmentTag[]
  type: AssignmentType
  system?: AssignmentSystem
  thumbnail?: string
  featured?: boolean
}
