import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchAllCrews } from '../../lib/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const crews = await fetchAllCrews()
    await res.status(200).json(crews)
  } catch (error) {
    await res.status(400).json({ message: 'error' })
  }
}
