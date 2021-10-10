import { CrewType, LaunchType } from './types'

export async function fetchAllCrews(): Promise<CrewType[]> {
  const response = await fetch('https://api.spacexdata.com/v4/crew')
  return response.json()
}

export async function fetchCrew(crewId: string): Promise<CrewType> {
  const response = await fetch(`https://api.spacexdata.com/v4/crew/${crewId}`)
  return response.json()
}

export async function fetchAllLaunches(): Promise<LaunchType[]> {
  const response = await fetch(`https://api.spacexdata.com/v5/launches`)
  return response.json()
}

export async function fetchLaunch(launchId: string): Promise<LaunchType> {
  const response = await fetch(`https://api.spacexdata.com/v5/launches/${launchId}`)
  return response.json()
}
