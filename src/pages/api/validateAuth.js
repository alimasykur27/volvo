import { withIronSessionApiRoute } from "iron-session/next"
import sessionOptions from "@/lib/sessionOptions"

async function validateAuthHandler(req, res) {
  if (req.method == 'POST') {
    if (req.session.status == 'logged-out' /*|| req.session.token != token*/) {
      return res.redirect('/login', 302)
    } else if (req.session.status == 'logged-in') {
      return res.status(200).json({ isValidated: true })
    } else {
      return res.redirect('/login', 302)
    }
  } else {
    return res.status(405).json({ message: 'POST Request Only' })
  }
}

export default withIronSessionApiRoute(validateAuthHandler, sessionOptions)