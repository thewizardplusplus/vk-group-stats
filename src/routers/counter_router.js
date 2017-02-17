import express from 'express'
import {validate_request} from '../utils/errors'
import {counter_model} from '../models/counter_model'

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
      .then(counters => response.json(counters))
      .catch(next_handler)
  })
  .post((request, response, next_handler) => {
    counter_model
      .create({
        group_id: request.params.group_id,
        value: Math.round(1000 * Math.random()),
      })
      .then(counter => response.json(counter))
      .catch(next_handler)
  })
  .delete((request, response, next_handler) => {
    counter_model
      .remove({
        group_id: request.params.group_id,
      })
      .then(() => response.json(true))
      .catch(next_handler)
  })

export const counter_router = express.Router()
counter_router.use(all_counters_router)
