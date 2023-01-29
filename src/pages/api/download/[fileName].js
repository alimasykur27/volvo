import fs from 'fs'
import path from 'path'
import sessionOptions from "@/lib/sessionOptions"
import { withIronSessionApiRoute } from "iron-session/next"

async function downloadHandler(req, res) {
  if (req.method == 'GET') {
    if (req.session.status == 'logged-in') {
      const filePath = path.join(process.cwd(), 'files/' + req.query.fileName.replace('/', ''))
      if (fs.existsSync(filePath)) {
        const fileBuffer = fs.readFileSync(filePath)
        res.setHeader('Content-Type', 'application/pdf')
        return res.send(fileBuffer)
      } else {
        return res.status(404).json({ message: 'The requested file does not exist in this server' })
      }
    } else {
      return res.redirect('/login', 302)
    }
  } else {
    return res.status(405).json({ message: 'GET Request Only' })
  }
}

export default withIronSessionApiRoute(downloadHandler, sessionOptions)