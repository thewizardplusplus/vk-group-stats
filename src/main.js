import mongoose from 'mongoose'
import {logger, http_logger} from './utils/logger'
import express from 'express'
import cookie_parser from 'cookie-parser'
import body_parser from 'body-parser'
import uuid_v4 from 'uuid/v4'
import session from 'express-session'
import session_store_generator from 'connect-mongo'
import express_validator from 'express-validator'
import {group_router} from './routers/group_router'
import {user_router} from './routers/user_router'
import {error_handler} from './utils/errors'

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

    const session_secret = process.env.VK_GROUP_STATS_SECRET || uuid_v4()
    app.use(cookie_parser(session_secret))
    app.use(body_parser.urlencoded({
      extended: true,
    }))
    app.use(body_parser.json())

    const session_store = session_store_generator(session)
    app.use(session({
      cookie: {
        secure: app.get('env') === 'production',
      },
      resave: false,
      saveUninitialized: false,
      secret: session_secret,
      store: new session_store({
        mongooseConnection: mongoose.connection,
      }),
    }))
    app.use(express_validator())
    app.use(group_router)
    app.use(user_router)
    app.use(error_handler)

    const port = process.env.VK_GROUP_STATS_SERVER_PORT || 3000
    app.listen(port, () => {
      logger.info(`app listening on port ${port}`)
    })
  })
  .catch(error => {
    logger.error(`app can't connect to MongoDB: ${util.inspect(error)}`)
  })
