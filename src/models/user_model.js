import is_integer from 'validator/lib/isInt'
import mongoose from 'mongoose'

export const user_model = mongoose.model('user', new mongoose.Schema({
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
}))
