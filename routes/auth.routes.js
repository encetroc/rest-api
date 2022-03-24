const express = require('express')
const User = require('../models/user.model')

const router = express.Router()

// create a user
router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  const user = await User.create({ email, password })
  res.send(user)
})

module.exports = router
