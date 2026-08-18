export type DirectionId =
  | 'backend'
  | 'frontend'
  | 'mobile'
  | 'ml'
  | 'datascience'
  | 'devops'
  | 'qa'
  | 'security'
  | 'gamedev'
  | 'design'
  | 'sysadmin'
  | 'embedded'
  | 'pm'
  | 'dba'

export type TestType = 'short' | 'long'

export type Screen = 'home' | 'test' | 'results'

export interface Direction {
  id: DirectionId
  name: string
  emoji: string
  description: string
  stack: string[]
  startWith: string
  salary: string
  courses: Course[]
}

export interface Answer {
  text: string
  scores: Partial<Record<DirectionId, number>>
}

export interface Question {
  id: number
  text: string
  answers: Answer[]
}

export interface TestResult {
  directionId: DirectionId
  score: number
  maxScore: number
  percentage: number
}

export interface Course {
  title: string
  platform: string
  url: string
  isFree?: boolean
}

