const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { isAuthenticated } = require('./middlewares/jwt.middleware')
dotenv.config()

// connect to the database
mongoose.connect(process.env.MONGO_DB_URL)

// create a new express app
const app = express()

// making our server accept json requests
app.use(express.json())

// root route
app.get('/', (req, res) => {
  res.send('hello world')
})

// posts routes
const postsRoutes = require('./routes/posts.routes')
app.use('/posts', isAuthenticated, postsRoutes)

// auth routes
const authRoutes = require('./routes/auth.routes')
app.use('/auth', authRoutes)

// listen to upcoming requests
app.listen(process.env.PORT)
