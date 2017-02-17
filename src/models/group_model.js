import mongoose from 'mongoose'
import {logger} from '../utils/logger'
import {default_error} from '../utils/errors'
import {counter_model} from '../models/counter_model'
import {vk_api} from '../utils/vk_api'

const group_schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'parameter is required'],
  },
  screen_name: {
    type: String,
    required: [true, 'parameter is required'],
  },
})
group_schema.methods.update_counter = function(done_handler) {
  vk_api.request('groups.getById', {
    'group_id': this.screen_name,
    'fields': 'members_count',
  }, response => {
    logger.info(`group ${this.id} requested VK API`)

    if (typeof response.error !== 'undefined') {
      done_handler(new default_error(
        `VK API error: "${response.error.error_msg}"`
      ))

      return
    }

    counter_model
      .create({
        group_id: this.id,
        value: response.response[0].members_count,
      })
      .then(counter => done_handler(null, counter))
      .catch(done_handler)
  })
}

export const group_model = mongoose.model('group', group_schema)
