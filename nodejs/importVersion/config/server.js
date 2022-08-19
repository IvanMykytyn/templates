import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import bodyParser from 'body-parser'
import cors from 'cors'

// log http requests
import morgan from 'morgan'

// security packages
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// db
import connectDB from '../db/connect.js'

// routers
import { testRouter } from '../routes'

// middleware

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

// helmet Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet())
// xss-clean Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params.
app.use(xss())
// express-mongo-sanitize Sanitizes user-supplied data to prevent MongoDB Operator Injection.
app.use(mongoSanitize())

app.use('/api/v1/test', testRouter)
app.all('*', notFoundErrorController)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    // mongoose setup
    // await connectDB(process.env.DB_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
