import mongoose from 'mongoose'

export const group_model = mongoose.model('group', new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'parameter is required'],
  },
  screen_name: {
    type: String,
    required: [true, 'parameter is required'],
  },
}))
