import {logger} from './logger'
import {group_model} from '../models/group_model'
import each_series from 'async/eachSeries'
import util from 'util'
import scheduler from 'node-schedule'

const vk_api_request_frequency = 3
const vk_api_request_period_error = 100

export function init_scheduler() {
  scheduler.scheduleJob(
    process.env.VK_GROUP_STATS_SCHEDULING
      || '0 0 * * *', // once every day
    () => {
      logger.info('start a groups counters update')

      group_model
        .find({})
        .then(groups => {
          each_series(groups, (group, next_handler) => {
            setTimeout(() => {
              group.update_counter(error => {
                if (error !== null) {
                  logger.error(
                    `group ${group.id} can't update its counter: `
                      + util.inspect(error)
                  )
                }

                next_handler()
              })
            }, Math.round(
              1000 / vk_api_request_frequency + vk_api_request_period_error
            ))
          }, () => {
            logger.info('finish a groups counters update')
          })
        })
        .catch(error => {
          logger.error(`groups can't be found: ${util.inspect(error)}`)
        })
    }
  )
}
