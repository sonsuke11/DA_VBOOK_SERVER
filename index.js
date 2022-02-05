import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connectDB from './db/connectDB.js'

dotenv.config()
import bookRoute from './routes/book.js'
import authorRoute from './routes/author.js'

const app = express()
app.use(bodyParser.raw())
app.use(bodyParser.json())
const PORT = process.env.PORT
connectDB()

app.use('/book', bookRoute)
app.use('/author', authorRoute)
app.listen(PORT, console.log(`listening on http://localhost:${PORT}`))
