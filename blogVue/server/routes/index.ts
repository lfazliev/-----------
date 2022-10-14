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

router.put('/posts', async (request, response) => {

  try {
    let data = request.body
    let filedata = request.file;
    if (!filedata) {
      console.log("Ошибка при загрузке файла")
      const res = await db.updateOne({ _id: new ObjectId(data._id) }, { $set: { title: data.title, text: data.text, url: data.url } })
      response.send({ result: res })
    } else {
      const res = await db.updateOne({ _id: new ObjectId(data._id) }, { $set: { title: data.title, text: data.text, url: data.url, src: data.src } })
      response.send({ result: res })
    }
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

router.delete('/posts', async (request, response) => {
  try {
    const res = await db.deleteOne({ _id: new ObjectId(request.body._id) })
    response.send({ result: res })

  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})



export default router
