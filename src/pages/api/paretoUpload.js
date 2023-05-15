import { withIronSessionApiRoute } from "iron-session/next"
import sessionOptions from "@/lib/sessionOptions"
const multer = require('multer')
const path = require('path')

const upload = multer({ storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/pareto/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '.jpg')
    }
  })
});

async function driveUploadHandler(req, res) {
  if (req.method != 'POST')
    return res.status(405).json({ message: 'POST Request Only' })
  if (req.session.status != 'logged-in')
    return res.redirect('/login', 302)

  try {
    upload.fields([
      { name: 'pareto1', maxCount: 1 },
      { name: 'pareto2', maxCount: 1 },
      { name: 'pareto3', maxCount: 1 },
    ])(req, {}, async function (err) {
      if (err)
        throw err
      return res.status(200).json({ message: 'Pareto image uploaded successfully' });
    })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export default withIronSessionApiRoute(driveUploadHandler, sessionOptions)

export const config = {
  api: {
    bodyParser: false
  },
};