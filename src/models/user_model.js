import is_integer from 'validator/lib/isInt'
import mongoose from 'mongoose'
import {logger} from '../utils/logger'
import {init_vk_api_client} from '../utils/vk_api'

const user_schema = new mongoose.Schema({
  vk_id: {
    type: Number,
    required: [true, 'parameter is required'],
    min: [0, 'parameter must be positive'],
    validate: {
      message: 'parameter must be an integer',

      validator(value) {
        return is_integer(value.toString())
      },
    },
  },
  photo: {
    type: String,
  },
  name: {
    type: String,
  },
  screen_name: {
    type: String,
  },
})
user_schema.methods.update = function(done_handler) {
  init_vk_api_client()
    .call('users.get', {
      user_ids: this.vk_id,
      fields: 'nickname, screen_name, photo_50',
    })
    .then(response => {
      logger.info(`user ${this.vk_id} requested VK API`)

      this
        .model('user')
        .findOneAndUpdate({
          vk_id: this.vk_id,
        }, {
          $set: {
            photo: response[0].photo_50,
            name: [
              response[0].first_name,
              response[0].nickname,
              response[0].last_name,
            ]
              .filter(name_part => name_part.length > 0)
              .join(' '),
            screen_name: response[0].screen_name,
          },
          $setOnInsert: {
            _id: this._id,
          },
        }, {
          new: true,
          upsert: true,
        })
        .then(user => done_handler(null, user))
        .catch(done_handler)
    })
    .catch(done_handler)
}

export const user_model = mongoose.model('user', user_schema)
