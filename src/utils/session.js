import uuid_v4 from 'uuid/v4'
import cookie_parser_generator from 'cookie-parser'
import session_generator from 'express-session'
import session_store_generator from 'connect-mongo'
import mongoose from 'mongoose'

const session_secret = uuid_v4()
export const cookie_parser = cookie_parser_generator(session_secret)
const session_store = session_store_generator(session_generator)
export const session = session_generator({
  cookie: {
    secure: true,
  },
  name: 'sessionId',
  proxy: true,
  resave: true,
  saveUninitialized: true,
  secret: session_secret,
  store: new session_store({
    mongooseConnection: mongoose.connection,
  }),
})
