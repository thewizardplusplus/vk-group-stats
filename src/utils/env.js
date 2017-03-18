import dotenv from 'dotenv'
import util from 'util'
import {logger} from './logger'

const required_variables = [
  'VK_GROUP_STATS_VK_APP_ID',
  'VK_GROUP_STATS_VK_APP_SECRET',
]
const variables_patterns = {
  VK_GROUP_STATS_SERVER_URI: /^https?:\/\/.+$/,
}

function update_env() {
  const result = dotenv.config()
  if (typeof result.error !== 'undefined') {
    logger.warn(`app can't load .env file: ${util.inspect(result.error)}`)
  }
}

function check_env() {
  const missed_variables = required_variables.filter(variable => {
    return typeof process.env[variable] === 'undefined'
  })
  if (missed_variables.length !== 0) {
    logger.error(
      'following environment variables are required: '
        + missed_variables.join(', ')
    )

    process.exit(1)
  }
}

function validate_env() {
    const incorrect_variables = Object.keys(process.env).filter(variable => {
      return typeof variables_patterns[variable] !== 'undefined'
        && !variables_patterns[variable].test(process.env[variable])
    })
    if (incorrect_variables.length !== 0) {
      logger.error(
        'following environment variables are incorrect: '
          + incorrect_variables.join(', ')
      )

      process.exit(1)
    }
}

export function process_env() {
  update_env()
  check_env()
  validate_env()
}
