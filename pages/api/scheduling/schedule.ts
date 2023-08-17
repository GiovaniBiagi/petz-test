import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }
  if (req.headers['content-type']?.toLowerCase() !== "application/json" && !req.body.hasOwnProperty("date") && !req.body.hasOwnProperty("time")) {
    res.status(400).json({ message: "Falha ao criar o agendamento" })
    return
  }

  res.status(200).json(req.body)
}
