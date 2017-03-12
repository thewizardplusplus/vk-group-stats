import dotenv from 'dotenv'
import util from 'util'
import {logger} from './logger'

function update_env() {
  const result = dotenv.config()
  if (typeof result.error !== 'undefined') {
    logger.warn(`app can't load .env file: ${util.inspect(result.error)}`)
  }
}

const required_variables = [
  'VK_GROUP_STATS_VK_APP_ID',
  'VK_GROUP_STATS_VK_APP_SECRET',
]
function check_env() {
  const missed_variables = required_variables.filter(variable => {
    return typeof process.env[variable] === 'undefined'
  })
  if (missed_variables.length !== 0) {
    logger.error(
      'following environment variables are required: '
        + missed_variables.join(', ')
    )

    process.exit()
  }
}

export function process_env() {
  update_env()
  check_env()
}
