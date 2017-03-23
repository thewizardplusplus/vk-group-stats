import {check_authentication, validate_request} from '../utils/errors'
import express from 'express'
import {group_model, make_group_update_handler} from '../models/group_model'

function validate_request_body(request, response, next_handler) {
  request.checkBody({
    'screen_name': {
      notEmpty: {
        errorMessage: 'parameter is required',
      },
    },
  })

  validate_request(request, next_handler)
}

const all_groups_router = express.Router()
const group_url_prefix = /^https?:\/\/vk\.com\//
all_groups_router.route('/groups')
  .get(check_authentication, (request, response, next_handler) => {
    group_model
      .find({
        user_id: request.user.id,
      })
      .then(groups => response.json({
        data: groups,
      }))
      .catch(next_handler)
  })
  .post(check_authentication, validate_request_body, (
    request,
    response,
    next_handler
  ) => {
    new group_model({
      user_id: request.user.id,
      screen_name: request.body.screen_name.replace(group_url_prefix, ''),
    })
      .update(make_group_update_handler(response, next_handler))
  })

const one_group_router = express.Router()
one_group_router.param('group_id', (request, response, next_handler) => {
  request.checkParams('group_id', 'parameter is required').notEmpty()
  request
    .checkParams('group_id', 'parameter must be a MongoDB ObjectId')
    .isMongoId()

  validate_request(request, next_handler)
})
one_group_router.route('/groups/:group_id')
  .delete(check_authentication, (request, response, next_handler) => {
    group_model
      .remove({
        _id: request.params.group_id,
      })
      .then(() => response.json({
        data: true,
      }))
      .catch(next_handler)
  })

export const group_router = express.Router()
group_router.use(all_groups_router)
group_router.use(one_group_router)
