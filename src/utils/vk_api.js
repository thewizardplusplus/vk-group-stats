import vk_api from 'node-vkapi'

export const vk_api_client = new vk_api({
  app: {
    id: process.env.VK_GROUP_STATS_VK_APP_ID || 5878021,
    secret: process.env.VK_GROUP_STATS_VK_APP_SECRET,
  },
  version: '5.62',
})
