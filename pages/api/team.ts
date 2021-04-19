import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next'

const teamURL = "https://tretton37.com/meet"

type Data = {
  name: string
}

export default async(req: NextApiRequest, res: NextApiResponse<Data | any>) => {
  try {
  const resp =  await fetch(teamURL).then(r=>r.json())
  console.log({resp})
  } catch(error){
    res.status(500).json({
      error
    })
  }
  res.status(200).json({ name: 'John Doe' })
}
