import express from 'express'
import {logger, http_logger} from './utils/logger'
import body_parser from 'body-parser'
import express_validator from 'express-validator'
import {user_router} from './routers/user_router'
import {error_handler} from './utils/errors'

const app = express()
app.use(http_logger)
app.use(body_parser.json())
app.use(express_validator())
app.use(user_router)
app.use(error_handler)

const port = process.env.VK_GROUP_STATS_PORT || 3000
app.listen(port, () => {
  logger.info(`app listening on port ${port}`)
})
