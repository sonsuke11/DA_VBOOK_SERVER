import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const URI = process.env.URI_LOCAL
const connectDB = async () => {
  try {
    await mongoose.connect(URI)
    console.log('DB connected!!!')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
