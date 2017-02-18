import {logger} from './logger'
import {group_model} from '../models/group_model'
import each from 'async/each'
import util from 'util'
import scheduler from 'node-schedule'

export function init_scheduler() {
  scheduler.scheduleJob(
    process.env.VK_GROUP_STATS_SCHEDULING
      || '0 0 * * *', // once every day
    () => {
      logger.info('start a groups counters update')

      group_model
        .find({})
        .then(groups => {
          each(groups, (group, done_handler) => {
            group.update_counter(error => {
              if (error !== null) {
                logger.error(
                  `group ${group.id} can't update its counter: `
                    + util.inspect(error)
                )
              }

              done_handler()
            })
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
