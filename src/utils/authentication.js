import {read_vk_api_parameters} from './vk_api'
import vk_strategy from 'passport-vkontakte'
import {user_model} from '../models/user_model'
import {logger} from './logger'
import passport from 'passport'
import mongoose from 'mongoose'

export function init_authentication() {
  const {app_id, app_secret, app_redirect_uri} = read_vk_api_parameters()
  passport.use(new vk_strategy.Strategy({
    clientID: app_id,
    clientSecret: app_secret,
    callbackURL: app_redirect_uri,
  }, (access_token, refresh_token, parameters, profile, done_handler) => {
    new user_model({
      vk_id: profile.id,
    })
      .update((error, user) => {
        if (error !== null) {
          next_handler(error)
          return
        }

        logger.info(`user ${user.vk_id} logged into the app`)
        done_handler(null, user)
      })
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
  _id: new mongoose.Types.ObjectId('507f1f77bcf86cd799439011'),
  vk_id: 13605040,
})
export function fake_authentication(request, response, next_handler) {
  request.user = fake_user
  next_handler()
}
