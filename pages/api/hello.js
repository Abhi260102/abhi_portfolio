// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '@/lib/dbConnect'
export default function handler(req, res) {
  dbConnect()
  res.status(200).json({ name: 'John Doe' })
}
