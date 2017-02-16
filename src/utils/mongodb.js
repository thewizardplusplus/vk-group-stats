import mongoose from 'mongoose'
import {logger} from './logger'
import util from 'util'

export function init_mongodb(connection_handler) {
  mongoose.Promise = global.Promise
  mongoose
    .connect(
      process.env.VK_GROUP_STATS_MONGODB_HOST || 'localhost',
      process.env.VK_GROUP_STATS_MONGODB_DATABASE || 'vk-group-stats',
      process.env.VK_GROUP_STATS_MONGODB_PORT || 27017
    )
    .then(() => {
      logger.info('app connected to MongoDB')
      connection_handler()
    })
    .catch(error => {
      logger.error(`app can't connect to MongoDB: ${util.inspect(error)}`)
    })
}
