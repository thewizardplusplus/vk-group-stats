import is_integer from 'validator/lib/isInt'
import mongoose from 'mongoose'

export const counter_model = mongoose.model('counter', new mongoose.Schema({
  group_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'parameter is required'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  value: {
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
