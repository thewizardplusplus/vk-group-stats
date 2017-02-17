import vk_sdk from 'vksdk'
import util from 'util'
import {logger} from './logger'

export const vk_api = new vk_sdk({
  appId: process.env.VK_GROUP_STATS_VK_APP_ID || 5878021,
  appSecret: process.env.VK_GROUP_STATS_VK_APP_SECRET,
  version: '5.62',
})
vk_api.on('http-error', error => {
  logger.error(`app can't request VK API: ${util.inspect(error)}`)
})
vk_api.on('parse-error', error => {
  logger.error(`VK API response is incorrect: ${util.inspect(error)}`)
})
