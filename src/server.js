import express from 'express'
import { connectDB } from './config/mongodb'
import { env } from './config/environtment'

const app = express()

const hostname = 'localhost'
const port = 8080

connectDB().catch(console.log())

app.get('/', (req, res) => {
  res.end('<h1>Hello Eng Ger dzzzz</h1>')
})

app.listen(env.PORT, env.HOST, () => {
  console.log(`Hello Eng Ger, ${hostname}:${port}/`)
})
