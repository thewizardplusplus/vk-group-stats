import express from 'express'
import {check_authentication} from '../utils/errors'
import {make_update_handler} from '../models/utils'

const one_user_router = express.Router()
one_user_router.route('/users/me')
  .get((request, response) => {
    response.json({
      data: request.user || null,
    })
  })
  .post(check_authentication, (request, response, next_handler) => {
    request.user.update(make_update_handler(response, next_handler))
  })

export const user_router = express.Router()
user_router.use(one_user_router)
