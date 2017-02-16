import mongoose from 'mongoose'
import {logger, http_logger} from './utils/logger'
import express from 'express'
import {cookie_parser, session} from './utils/session'
import body_parser from 'body-parser'
import passport from 'passport'
import express_validator from 'express-validator'
import {authentication_router} from './routers/authentication_router'
import {group_router} from './routers/group_router'
import {user_router} from './routers/user_router'
import {error_handler} from './utils/errors'
import {init_authentication} from './utils/authentication'

mongoose.Promise = global.Promise
mongoose
  .connect(
    process.env.VK_GROUP_STATS_MONGODB_HOST || 'localhost',
    process.env.VK_GROUP_STATS_MONGODB_DATABASE || 'vk-group-stats',
    process.env.VK_GROUP_STATS_MONGODB_PORT || 27017
  )
  .then(() => {
    logger.info('app connected to MongoDB')

    const app = express()
    app.use(http_logger)
    app.use(cookie_parser)
    app.use(body_parser.urlencoded({
      extended: true,
    }))
    app.use(body_parser.json())
    app.use(session)
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(express_validator())
    app.use(authentication_router)
    app.use(group_router)
    app.use(user_router)
    app.use(error_handler)

    init_authentication()

    const port = process.env.VK_GROUP_STATS_SERVER_PORT || 3000
    app.listen(port, () => {
      logger.info(`app listening on port ${port}`)
    })
  })
  .catch(error => {
    logger.error(`app can't connect to MongoDB: ${util.inspect(error)}`)
  })
