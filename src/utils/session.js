import uuid_v4 from 'uuid/v4'
import session_generator from 'express-session'
import session_store_generator from 'connect-mongo'
import cookie_parser_generator from 'cookie-parser'
import mongoose from 'mongoose'

export function init_session() {
  const session_secret = process.env.VK_GROUP_STATS_SESSION_SECRET || uuid_v4()
  const session_store = session_store_generator(session_generator)
  return {
    cookie_parser: cookie_parser_generator(session_secret),
    session: session_generator({
      name: 'sessionId',
      resave: false,
      saveUninitialized: false,
      secret: session_secret,
      store: new session_store({
        mongooseConnection: mongoose.connection,
      }),
    }),
  }
}
