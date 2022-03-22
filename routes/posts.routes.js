const express = require('express')
const Post = require('../models/post.model')

const router = express.Router()

// get all the posts
router.get('/', async (req, res) => {
  const posts = await Post.find()
  res.send(posts)
})

// create a new post
router.post('/', async (req, res) => {
  const { title, content } = req.body
  const post = await Post.create({ title, content })
  res.send(post)
})

module.exports = router
