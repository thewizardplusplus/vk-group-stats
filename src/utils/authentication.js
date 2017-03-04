import vk_strategy from 'passport-vkontakte'
import {user_model} from '../models/user_model'
import {logger} from './logger'
import passport from 'passport'
import mongoose from 'mongoose'

export function init_authentication() {
  passport.use(new vk_strategy.Strategy({
    clientID: process.env.VK_GROUP_STATS_VK_APP_ID || 5878021,
    clientSecret: process.env.VK_GROUP_STATS_VK_APP_SECRET,
    callbackURL: process.env.VK_GROUP_STATS_VK_APP_CALLBACK
      || 'http://localhost:4000/authentication/vk/callback',
  }, (access_token, refresh_token, parameters, profile, done_handler) => {
    const query = {
      vk_id: profile.id,
    }
    user_model
      .findOneAndUpdate(query, query, {
        upsert: true,
      })
      .then(user => {
        logger.info(`user ${user.id} logged into the app`)
        done_handler(null, user)
      })
      .catch(done_handler)
  }))
  passport.serializeUser((user, done_handler) => {
    done_handler(null, user.id)
  })
  passport.deserializeUser((user_id, done_handler) => {
    user_model
      .findById(user_id)
      .then(user => done_handler(null, user))
      .catch(done_handler)
  })
}

const fake_user = new user_model({
  _id: mongoose.Types.ObjectId('507f1f77bcf86cd799439011'),
  vk_id: 0,
})
export function fake_authentication(request, response, next_handler) {
  request.user = fake_user
  next_handler()
}
