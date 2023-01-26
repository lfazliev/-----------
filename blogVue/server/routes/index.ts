import Router from 'express'
import { ObjectId } from 'mongodb'
import client from '@/db'
import fs from 'fs'
const db = client.db('blog', 'posts')
const dbheader = client.db('blog', 'header');
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
    if (Boolean(data.src) && filedata) {
      fs.unlinkSync(`../client/src/assets/${data.src}`)
    }
    const res = await db.updateOne({ _id: new ObjectId(data._id) }, { $set: { title: data.title, text: data.text, url: data.url, src: (filedata) ? filedata.originalname : data.src } })
    response.send({ result: res })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})
router.post('/posts', async (request, response) => {
  try {
    let filedata = request.file
    const res = await db.insertOne({ ...request.body, src: (filedata) ? filedata.originalname : false })
    response.send({ result: res })

  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})

router.delete('/posts', async (request, response) => {
  try {
    if (request.body.p.src) {
      fs.unlinkSync(`../client/src/assets/${request.body.p.src}`)
    }
    // fs.unlinkSync(`./public/assets/${request.body.p.src}`)
    const res = await db.deleteOne({ _id: new ObjectId(request.body.p._id) })
    response.send({ result: res })

  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})

router.post('/header', async (request, response) => {
  try {
    const res = 'a'
    const user = await dbheader.findOne({ username: request.body.username });
    if (!user) {
      return false;
    }
    response.send({ result: res })
  } catch (e) {
    response.send({ result: 'error', data: e })
  }
})


export default router
