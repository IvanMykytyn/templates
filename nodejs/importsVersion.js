import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
// const bodyParser = require("body-parser");
const cors = require('cors')

// log http requests
import morgan from 'morgan'

// security packages
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// db
// import connectDB from './db/connect.js

// routers

// middleware
import authenticateUser from './middleware/auth.js'
import notFoundMiddleware from './middleware/not-found.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})
const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
