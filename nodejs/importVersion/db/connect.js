// mongoDB
import mongoose from 'mongoose'

const connectDB = (url) => {
  return mongoose.connect(url)
}

export default connectDB

// postgreSQL

// import {Client} from 'pg'

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: process.env.DB_PASSWORD,
//     database: "database_name"
// })

// export default client