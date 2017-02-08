import express from 'express'
import {logger} from './utils/logger'

const app = express()
app.get('/', (request, response) => {
  response.send('Hello, world!')
})

const port = process.env.VK_GROUP_STATS_PORT || 3000
app.listen(port, () => {
  logger.info(`app listening on port ${port}`)
})
