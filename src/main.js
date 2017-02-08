import express from 'express'

const app = express()
app.get('/', (request, response) => {
  response.send('Hello, world!')
})

const port = 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
