const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send(['post1', 'post2'])
})

module.exports = router
