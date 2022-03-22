const express = require('express')
const Post = require('../models/post.model')

const router = express.Router()

router.get('/', (req, res) => {
  res.send(['post1', 'post2'])
})

// create a new post
router.post('/', async (req, res) => {
  const { title, content } = req.body
  const post = await Post.create({ title, content })
  res.send(post)
})

module.exports = router
