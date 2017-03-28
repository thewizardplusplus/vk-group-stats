import mongoose from 'mongoose'
import {logger} from '../utils/logger'
import {counter_model} from '../models/counter_model'
import {init_vk_api_client} from '../utils/vk_api'

const group_schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'parameter is required'],
  },
  photo: {
    type: String,
  },
  name: {
    type: String,
  },
  screen_name: {
    type: String,
    required: [true, 'parameter is required'],
  },
})
group_schema.methods.update = function(done_handler) {
  init_vk_api_client()
    .call('groups.getById', {
      group_id: this.screen_name,
      fields: 'members_count',
      lang: 'ru',
    })
    .then(response => {
      logger.info(`group ${this.id} requested VK API`)

      this
        .model('group')
        .findOneAndUpdate({
          user_id: this.user_id,
          screen_name: this.screen_name,
        }, {
          $set: {
            photo: response[0].photo_50,
            name: response[0].name,
          },
          $setOnInsert: {
            _id: this._id,
          },
        }, {
          new: true,
          upsert: true,
        })
        .then(group => {
          counter_model
            .create({
              group_id: group.id,
              value: response[0].members_count,
            })
            .then(counter => done_handler(null, {
              group,
              counter,
            }))
            .catch(done_handler)
        })
        .catch(done_handler)
    })
    .catch(done_handler)
}

export const group_model = mongoose.model('group', group_schema)
