import express from 'express'
import passport from 'passport'
import {logger} from '../utils/logger'

export const authentication_router = express.Router()
authentication_router
  .get('/authentication/vk', passport.authenticate('vkontakte'))
  .get('/authentication/vk/callback', passport.authenticate('vkontakte', {
    successRedirect: '/',
    failureRedirect: '/',
  }))
  .get('/logout', (request, response) => {
    logger.info(`user ${request.user.id} logged out of the app`)
    request.logout()

    response.redirect('/')
  })
