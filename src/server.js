import express from 'express'
import { mapOrder } from '*/utilities/sorts.js'
const app = express()
const hostname = 'localhost'
const port = 8080
app.get('/', (req, res) => {
  res.end('<h1>Hello Eng Ger dzzzz</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Hello Eng Ger, ${hostname}:${port}/`)
})
