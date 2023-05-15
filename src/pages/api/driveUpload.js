import { withIronSessionApiRoute } from "iron-session/next"
import sessionOptions from "@/lib/sessionOptions"
const { google } = require('googleapis')
const multer = require('multer')
const path = require('path')
const { Readable } = require('stream')
const keyFile = path.resolve(process.cwd(), 'credentials/rising-city-343406-541f6be3fe18.json')

const scopes = ['https://www.googleapis.com/auth/drive']
const authClient = new google.auth.GoogleAuth({ keyFile, scopes })
const service = google.drive({ version: 'v3', auth: authClient });
const upload = multer({ storage: multer.memoryStorage() });

async function driveUploadHandler(req, res) {
  if (req.method != 'POST')
    return res.status(405).json({ message: 'POST Request Only' })
  if (req.session.status != 'logged-in')
    return res.redirect('/login', 302)

  try {
    upload.single('pdf_file')(req, {}, async function (err) {
      if (err)
        throw err
      if (!req.file)
        return res.status(400).json({ message: 'No file uploaded' })
      
      const file = await service.files.create({
        resource: { 
          name: new Date().toLocaleString() + '-' + req.file.originalname,
          parents: [process.env.DRIVE_FOLDER_ID],
        },
        media: {
          mimeType: 'application/pdf',
          body: Readable.from(req.file.buffer),
        },
        fields: 'id',
      });
      return res.status(200).json({ message: 'Uploaded to Google Drive successfully' });
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