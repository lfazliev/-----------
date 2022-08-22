// npm init
// npm i mobgodb
// npm i nodemon

console.log("it's work")

import { MongoClient, ServerApiVersion } from 'mongodb'
const mySecret = process.env['DBPass']
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

const start = async () => {
    try {
        await client.connect()
        console.log('Соединение установлено')
        const collection = client.db("test").collection("lesson")
        // await collection.insertOne({ title: 'Создание единичной записи', data: 123 })
        const dataNumber = await collection.findOne({ data: 123 })
        console.log(dataNumber)
        const dataString = await collection.findOne({ data: '123' })
        console.log(dataString)
        // await collection.insertOne({ title: 'Создание единичной записи c массивом', tag: 'array', data: [1, 2, 3] })
        const dataArr = await collection.findOne({ tag: 'array' })
        console.log(dataArr)

        // Множественное создание записей
        // await collection.insertMany([
        //     { name: 'Vasya', age: 20 },
        //     { name: 'Petya', age: 30 },
        //     { name: 'Iliya', age: 25 },
        //     { name: 'Evgeniy', age: 35 }
        // ])

        // Поиск и сортировка
        const find1 = await collection.find({ age: 20 }).toArray()
        console.log(find1)
        // Поиск несуществующего
        const find2 = await collection.find({ age: 22 }).toArray()
        console.log(find2) // []
        const find3 = await collection.findOne({ age: 22 })
        console.log(find3) // null

        // ИЛИ в поиске
        const find4 = await collection.find({ $or: [{ age: 25 }, { name: 'Vasya' }] }).toArray()
        console.log(find4)

        // Больше, меньше, не равно в отборе
        // $gt (greater then) Больше
        // $gte (greater then (or) equalls) Больше или равно
        // $lt (less then) Меньше
        // $lte (less then (or) equalls) Меньше или равно
        // $ne (not equalls) Не равно
        const find5 = await collection.find({ age: { $gt: 25 } }).toArray()
        console.log(find5)

        // Сортировка
        // -1 по убыванию
        // 1 по возрастанию
        // limit - ограничение количества выборки
        const find6 = await collection.find({ age: { $gt: 0 } }).sort({ age: -1 }).limit(4).toArray()
        console.log(find6)


        // const findAll = await collection.find({}).toArray()
        // console.log(findAll)

        client.close();
    } catch (e) {
        console.log(e)
    }
}

start()
