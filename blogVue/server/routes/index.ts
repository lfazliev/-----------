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
  } catch(e) {
    response.send({ result: 'error', data: e })
  }
})


router.post('/todos', async (request, response) => {
  //console.log('post')
  //console.log(request.body)
  try {
    let res
    if (request.body._id) {
      console.log(request.body)
      const res = await db.updateOne({_id:new ObjectId(request.body._id)}, {
        $set:{
          title:request.body.title
        }
      })
    } else {
      const res = await db.insertOne(request.body)
    }
    response.send({ result: res })
  } catch(e) {
    response.send({ result: 'error', data: e })
  }
})

router.get('/clear', async (request, response) => {
  try {
    const res = await db.deleteMany({})
    response.send({ result: res })
  } catch(e) {
    response.send({ result: 'error', data: e })
  }
})

router.post('/check', async (request, response) => {
  try {
    const res = await db.updateOne({_id:new ObjectId(request.body._id)}, {$set:{done:request.body.done}})
    response.send({ result: res })
  } catch(e) {
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
  } catch(e) {
    response.send({ result: 'error', data: e })
  }
})


export default router
