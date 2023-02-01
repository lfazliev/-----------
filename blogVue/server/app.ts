import express from 'express'
import router from '@/routes'
import dbClient from '@/db'
import pkg from 'body-parser'
import cors from 'cors'
import multer from 'multer'
const { json, urlencoded } = pkg
const port = 3002
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})
const app = express()
app.use(cors())
app.use(multer({ storage: storageConfig }).single("file"))
app.use(json({ limit: '50mb' }))
app.use(urlencoded({
  extended: true
}))

app.use(express.static('public'))
dbClient.connect()
app.use(router)

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`)
})

process.on("SIGINT", () => {
  dbClient.close();
  console.log('The connection to the database is closed')
  process.exit();
});