import express from 'express'

import { getAllBooks, createBook } from '../controllers/book.js'
const route = express.Router()

// @get all book
route.get('/', getAllBooks)
route.post('/', createBook)

export default route
