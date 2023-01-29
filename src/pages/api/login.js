const { v4: uuidv4 } = require('uuid');
import sessionOptions from '@/lib/sessionOptions';
import { withIronSessionApiRoute } from 'iron-session/next'
import { serialize } from 'cookie';

async function loginHandler(req, res) {
  if (req.method == 'POST') {
    const { email, password } = req.body
    if (!email || !password)
      res.status(400).json({ message: 'Email & password cannot be empty' })
    else {
      if (email == process.env.EMAIL && password == process.env.PASSWORD) {
        let token = uuidv4()
        req.session.token = token
        req.session.status = 'logged-in'
        await req.session.save()
        //res.setHeader('Set-Cookie', serialize('token', token, { maxAge: 3600, path: '/' })).redirect('/', 302)
        return res.redirect('/', 302)
      } else {
        res.status(400).json({ message: 'Wrong email or password' })
      }
    }
  } else {
    return res.status(405).json({ message: 'POST Request Only' })
  }
}

export default withIronSessionApiRoute(loginHandler, sessionOptions)