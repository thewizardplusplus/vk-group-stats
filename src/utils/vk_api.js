import {read_server_uri} from './server_uri'
import vk_api from 'node-vkapi'

export function read_vk_api_parameters() {
  const app_id = process.env.VK_GROUP_STATS_VK_APP_ID
  const app_secret = process.env.VK_GROUP_STATS_VK_APP_SECRET
  const {authority_part} = read_server_uri()
  return {
    app_id,
    app_secret,
    app_redirect_uri: `http://${authority_part}/authentication/vk/callback`,
  }
}

export function init_vk_api_client() {
  const {app_id, app_secret} = read_vk_api_parameters()
  return new vk_api({
    app: {
      id: app_id,
      secret: app_secret,
    },
    version: '5.62',
  })
}
