import express from 'express'
import {check_authentication, validate_request} from '../utils/errors'
import {counter_model} from '../models/counter_model'
import {group_model} from '../models/group_model'
import {make_update_handler} from '../models/utils'

const all_counters_router = express.Router()
all_counters_router.param('group_id', (request, response, next_handler) => {
  request.checkParams('group_id', 'parameter is required').notEmpty()
  request
    .checkParams('group_id', 'parameter must be a MongoDB ObjectId')
    .isMongoId()

  validate_request(request, next_handler)
})
all_counters_router.route('/groups/:group_id/counters')
  .get(check_authentication, (request, response, next_handler) => {
    request
      .checkQuery(
        'start_timestamp',
        'parameter must be a timestamp in the ISO 8601 format'
      )
      .optional()
      .isDate()
    request
      .checkQuery('additional_counter', 'parameter must be a boolean')
      .optional()
      .isBoolean()

    request.sanitizeQuery('start_timestamp').toDate()
    request.sanitizeQuery('additional_counter').toBoolean()

    validate_request(request, next_handler)
  }, (request, response, next_handler) => {
    const query = {
      group_id: request.params.group_id,
    }
    if (request.query.start_timestamp instanceof Date) {
      query.timestamp = {
        $gte: request.query.start_timestamp,
      }
    }

    counter_model
      .find(query)
      .sort({
        timestamp: 'descending',
      })
      .then(counters => response.json({
        data: counters,
      }))
      .catch(next_handler)
  })
  .post(check_authentication, (request, response, next_handler) => {
    group_model
      .findById(request.params.group_id)
      .then(group => group.update(make_update_handler(
        response,
        next_handler
      )))
      .catch(next_handler)
  })

export const counter_router = express.Router()
counter_router.use(all_counters_router)
