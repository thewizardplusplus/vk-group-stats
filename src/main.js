import express from 'express'
import {logger, http_logger} from './utils/logger'
import {user_router} from './routers/user_router'

const app = express()
app.use(http_logger)
app.use(user_router)

const port = process.env.VK_GROUP_STATS_PORT || 3000
app.listen(port, () => {
  logger.info(`app listening on port ${port}`)
})
