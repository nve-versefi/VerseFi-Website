// app/api/hello/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Your API logic here. For example, send a JSON response with a message.
  res.status(200).json({ message: 'Hello World' });
}