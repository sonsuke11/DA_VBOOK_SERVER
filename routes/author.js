import express from 'express'

import { createAuthor } from '../controllers/author.js'
const route = express.Router()

// @get all book
route.post('/', createAuthor)

export default route
