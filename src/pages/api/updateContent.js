import { withIronSessionApiRoute } from "iron-session/next"
import sessionOptions from "@/lib/sessionOptions"
import { saveJson } from "@/lib/contentData"

async function updateContentHandler(req, res) {
  try {
    if (req.method != 'POST')
      return res.status(405).json({ message: 'POST Request Only' })
    if (req.session.status != 'logged-in')
      return res.redirect('/login', 302)
  
    const { contentData } = req.body
    saveJson(contentData)
    return res.status(200).json({ message: 'Content data saved successfully' })
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }
}

export default withIronSessionApiRoute(updateContentHandler, sessionOptions)