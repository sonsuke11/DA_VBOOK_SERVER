import mongoose from 'mongoose'
import { TB_AUTHORS } from '../utils/constants.js'
const { Schema, model } = mongoose

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  infor: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

export default model(TB_AUTHORS, AuthorSchema)
