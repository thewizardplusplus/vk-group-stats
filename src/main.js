import express from 'express'
import {logger, http_logger} from './utils/logger'

const app = express()
app.use(http_logger)
app.get('/', (request, response) => {
  response.send('Hello, world!')
})

const port = process.env.VK_GROUP_STATS_PORT || 3000
app.listen(port, () => {
  logger.info(`app listening on port ${port}`)
})
