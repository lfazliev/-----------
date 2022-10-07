import Router from 'express'
import { ObjectId } from 'mongodb'
import client from '@/db'
const db = client.db('blog', 'posts')
const router = Router()

router.get('/posts', async (request, response) => {
  //console.log(request.query)
  try {
    const all = await db.find({}).toArray()
    response.send({ all })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})


router.post('/posts', async (request, response) => {
  try {
    let filedata = request.file
    console.log(filedata)
    if (!filedata) {
      console.log("Ошибка при загрузке файла")
    } else {
      console.log("Файл загружен")
      const res = await db.insertOne({ ...request.body, src: filedata.originalname })
      response.send({ result: res })
    }
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})

router.get('/clear', async (request, response) => {
  try {
    const res = await db.deleteMany({})
    response.send({ result: res })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})
router.delete('/posts', async (request, response) => {
  try {
    const res = await db.deleteOne({ _id: new ObjectId(request.body._id) })
    response.send({ result: res })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})

router.get('/contact', async (request, response) => {
  //console.log(request.query)
  try {
    //const all = await db.find({}).toArray()
    response.render("contact.hbs", {
      title: "Мои контакты",
      emailsVisible: true,
      style: `h1 {
        color:blue;
      }`,
      emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
      phone: "<b>+1234567890</b>"
    })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})


export default router
