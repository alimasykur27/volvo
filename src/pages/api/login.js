const { v4: uuidv4 } = require('uuid');
import Session from '@/lib/session';
import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method == 'POST') {
    const { email, password } = req.body
    console.log(email, password)
    if (!email || !password)
      res.status(400).json({ message: 'Email & password cannot be empty' })
    else {
      if (email == process.env.email && password == process.env.password) {
        let token = uuidv4()
        Session.prototype.token = token
        Session.prototype.status = 'logged-in'
        res.setHeader('Set-Cookie', serialize('token', token, { maxAge: 3600, path: '/' })).redirect('/dashboard', 302)
      } else {
        res.status(400).json({ message: 'Wrong email or password' })
      }
    }
  } else {
    res.status(405).json({ message: 'POST Request Only' })
  }
}