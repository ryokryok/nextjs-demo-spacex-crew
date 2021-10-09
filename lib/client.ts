import { CrewType } from './types'

export async function fetchAllCrews(): Promise<CrewType[]> {
  const response = await fetch('https://api.spacexdata.com/v4/crew')
  return response.json()
}

export async function fetchCrew(crewId: string): Promise<CrewType> {
  const response = await fetch(`https://api.spacexdata.com/v4/crew/${crewId}`)
  return response.json()
}
