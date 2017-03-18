import {process_env} from './utils/env'
import express from 'express'
import helmet from 'helmet'
import {logger, http_logger} from './utils/logger'
import {cookie_parser, session} from './utils/session'
import body_parser from 'body-parser'
import passport from 'passport'
import express_validator from 'express-validator'
import {authentication_router} from './routers/authentication_router'
import {group_router} from './routers/group_router'
import {counter_router} from './routers/counter_router'
import {user_router} from './routers/user_router'
import {error_handler} from './utils/errors'
import {init_authentication, fake_authentication} from './utils/authentication'
import {init_scheduler} from './utils/scheduler'
import {read_server_uri} from './utils/server_uri'
import url_join from 'url-join'
import {read_vk_api_parameters} from './utils/vk_api'
import util from 'util'
import {init_mongodb} from './utils/mongodb'

process_env()
init_mongodb(() => {
  try {
    const app = express()
    app.use(helmet({
      hsts: false,
    }))
    app.use(http_logger)
    app.use(cookie_parser)
    app.use(body_parser.urlencoded({
      extended: true,
    }))
    app.use(body_parser.json())
    app.set('trust proxy', true) // trust a proxy
    app.use(session)
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(express_validator())
    app.use(authentication_router)
    if (process.env.VK_GROUP_STATS_SKIP_AUTHENTICATION === 'TRUE') {
      app.use(fake_authentication)
    }
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static('client/build'))
    }

    const base_api_endpoint = '/api/v1'
    app.use(base_api_endpoint, group_router)
    app.use(base_api_endpoint, counter_router)
    app.use(base_api_endpoint, user_router)
    app.use(error_handler)

    init_authentication()
    init_scheduler()

    const {port, uri} = read_server_uri()
    app.listen(port, () => {
      logger.info(`app listening on ${url_join(uri, '')}`)

      const {app_redirect_uri} = read_vk_api_parameters()
      logger.info(`VK app redirect URI is ${app_redirect_uri}/`)
    })
  } catch(error) {
    logger.error(`unknown error: ${util.inspect(error)}`)
    process.exit(1)
  }
})
