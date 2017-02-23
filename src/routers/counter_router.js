import express from 'express'
import {check_authentication, validate_request} from '../utils/errors'
import {counter_model} from '../models/counter_model'
import {group_model} from '../models/group_model'

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
      .then(counters => response.json({
        data: counters,
      }))
      .catch(next_handler)
  })
  .post(check_authentication, (request, response, next_handler) => {
    group_model
      .findById(request.params.group_id)
      .then(group => group.update_counter((error, counter) => {
        if (error !== null) {
          next_handler(error)
          return
        }

        response.json({
          data: counter,
        })
      }))
      .catch(next_handler)
  })
  .delete(check_authentication, (request, response, next_handler) => {
    counter_model
      .remove({
        group_id: request.params.group_id,
      })
      .then(() => response.json({
        data: true,
      }))
      .catch(next_handler)
  })

export const counter_router = express.Router()
counter_router.use(all_counters_router)