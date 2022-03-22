const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

// create a new express app
const app = express()

// making our server accept json requests
app.use(express.json())

// root route
app.get('/', (req, res) => {
  res.send('hello world')
})

// listen to upcoming requests
app.listen(process.env.PORT)
