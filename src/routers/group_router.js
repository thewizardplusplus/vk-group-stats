import {validate_request} from '../utils/errors'
import express from 'express'

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
all_groups_router.route('/groups')
  .get((request, response) => {
    response.json({})
  })
  .post(validate_request_body, (request, response) => {
    response.json({
      group: request.body,
    })
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
  .delete((request, response) => {
    response.json({
      group_id: request.params.group_id,
    })
  })

export const group_router = express.Router()
group_router.use(all_groups_router)
group_router.use(one_group_router)
