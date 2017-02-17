import express from 'express'
import {validate_request} from '../utils/errors'

const all_counters_router = express.Router()
all_counters_router.param('group_id', (request, response, next_handler) => {
  request.checkParams('group_id', 'parameter is required').notEmpty()
  request
    .checkParams('group_id', 'parameter must be a MongoDB ObjectId')
    .isMongoId()

  validate_request(request, next_handler)
})
all_counters_router.route('/groups/:group_id/counters')
  .get((request, response, next_handler) => {
    request
      .checkQuery(
        'start_timestamp',
        'parameter must be a timestamp in the ISO 8601 format'
      )
      .optional()
      .isDate()
    request.sanitizeQuery('start_timestamp').toDate()

    validate_request(request, next_handler)
  }, (request, response) => {
    response.json({
      group_id: request.params.group_id,
      start_timestamp: request.query.start_timestamp,
    })
  })
  .post((request, response) => {
    response.json({
      group_id: request.params.group_id,
    })
  })
  .delete((request, response) => {
    response.json({
      group_id: request.params.group_id,
    })
  })

export const counter_router = express.Router()
counter_router.use(all_counters_router)
