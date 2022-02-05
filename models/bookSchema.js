import mongoose from 'mongoose'
import { TB_AUTHORS, TB_BOOKS } from '../utils/constants.js'
const { Schema, model } = mongoose

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: TB_AUTHORS,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})
export default model(TB_BOOKS, BookSchema)
