import BookSchema from '../models/BookSchema.js'
import AuthorSchema from '../models/authorSchema.js'
import { TB_AUTHORS } from '../utils/constants.js'

export const getAllBooks = async (req, res) => {
  try {
    const books = await BookSchema.aggregate([
      {
        $lookup: {
          from: TB_AUTHORS,
          localField: 'authorId',
          foreignField: '_id',
          as: 'author',
        },
      },
    ])
    if (!books) {
      return res.status(404).json({ success: false, message: 'Book not found' })
    }
    return res.status(200).json({ success: true, data: books })
  } catch (error) {
    console.log(error)
  }
}

export const createBook = async (req, res) => {
  try {
    const { name, genre, authorId } = req.body
    if (!(name && genre && authorId)) {
      return res
        .status(401)
        .json({ success: false, message: 'Missing information of book' })
    }
    const checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$')

    const isObjectId = checkForHexRegExp.test(authorId)
    if (!isObjectId) {
      return res
        .status(401)
        .json({ success: false, message: 'AuthorId is incorrect' })
    }
    if (isObjectId) {
      const author = await AuthorSchema.findById(authorId)
      if (!author) {
        return res
          .status(404)
          .json({ success: false, message: 'Author is not found' })
      }
    }
    const book = new BookSchema({ name, genre, authorId })
    await book.save()

    return res.status(200).json({ succes: true, message: 'Create successfull' })
  } catch (error) {
    console.log(error)
  }
}
