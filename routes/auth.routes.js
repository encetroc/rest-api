const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

const router = express.Router()

// create a user
router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  const passwordHash = await bcrypt.hash(password, 10)
  const user = await User.create({ email, password: passwordHash })
  res.send(user)
})

module.exports = router
