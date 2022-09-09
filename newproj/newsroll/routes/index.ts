import Router from 'express'
import { ObjectId } from 'mongodb'
import client from '@/db'
const db = client.db('toDoApp', 'todos')
const router = Router()

router.get('/news', async (request, response) => {
  //console.log(request.query)
  try {
    const all = await db.find({}).toArray()
    response.send({ result: 'ok', data: all })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})


router.post('/news', async (request, response) => {
  //console.log('post')
  //console.log(request.body)
  try {
    const res = await db.insertOne(request.body)
    response.send({ result: res })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})

router.put('/news', async (request, response) => {
  //console.log('post')
  // console.log(request.body)
  try {
    const res = await db.updateOne({ _id: new ObjectId(request.body.id) }, { $set: { header: request.body.header, text: request.body.text, tagarr: request.body.tagarr } })
    response.send({ result: res })
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

router.delete('/news', async (request, response) => {
  try {
    const res = await db.deleteOne({ _id: new ObjectId(request.body.id) })
    response.send({ result: res })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})

export default router
