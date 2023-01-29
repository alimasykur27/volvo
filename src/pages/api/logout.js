const { v4: uuidv4 } = require('uuid');
import sessionOptions from '@/lib/sessionOptions';
import { withIronSessionApiRoute } from 'iron-session/next'

async function logoutHandler(req, res) {
  if (req.method == 'POST') {
    if (req.session && req.session.status == 'logged-in') {
      await req.session.destroy()
      return res.redirect('/login', 302)
    } else {
      return res.status(403).json({ message: 'You are not logged in' })
    }
  } else {
    return res.status(405).json({ message: 'POST Request Only' })
  }
}

export default withIronSessionApiRoute(logoutHandler, sessionOptions)