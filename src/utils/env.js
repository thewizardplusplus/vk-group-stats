import dotenv from 'dotenv'
import util from 'util'
import {logger} from './logger'

export function update_env() {
  const result = dotenv.config()
  if (typeof result.error !== 'undefined') {
    logger.warn(`app can't load .env file: ${util.inspect(result.error)}`)
  }
}
