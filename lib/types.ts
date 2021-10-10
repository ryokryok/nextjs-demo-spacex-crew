export type CrewType = {
  name: string
  agency: string
  image: string
  wikipedia: string
  launches: string[]
  status: string
  id: string
}

export type LaunchType = {
  id: string
  name: string
  date_utc: string
  details: string | null
  links: {
    patch: {
      small: string | null
      large: string | null
    }
    webcast: string | null
    article: string | null
  }
  crew: {
    crew: string | null
    role: string | null
  }[]
}
