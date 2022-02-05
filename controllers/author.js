import AuthorSchema from '../models/authorSchema.js'

export const createAuthor = async (req, res) => {
  const { name, age } = req.body
  try {
    if (!(name && age)) {
      return res
        .status(400)
        .json({ success: false, message: 'Missing information of author' })
    }

    const newAuthor = new AuthorSchema({ name, age })
    await newAuthor.save()
    return res
      .status(200)
      .json({ success: true, message: 'Create successfull' })
  } catch (error) {
    console.log(error)
  }
}
