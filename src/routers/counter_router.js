import express from 'express'
import {check_authentication, validate_request} from '../utils/errors'
import {counter_model} from '../models/counter_model'
import {group_model} from '../models/group_model'
import {make_update_handler} from '../models/utils'

function request_counters(db_request, response, next_handler) {
  db_request
    .sort({
      timestamp: 'descending',
    })
    .then(counters => response.json({
      data: counters,
    }))
    .catch(next_handler)
}

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
    const full_query = {
      group_id: request.params.group_id,
    }
    const short_query = Object.assign({}, full_query, {
      timestamp: {
        $gte: request.query.start_timestamp,
      },
    })
    if (typeof request.query.start_timestamp === 'undefined') {
      request_counters(counter_model.find(full_query), response, next_handler)
    } else if (
      typeof request.query.additional_counter === 'undefined'
      || !request.query.additional_counter
    ) {
      request_counters(counter_model.find(short_query), response, next_handler)
    } else {
      counter_model
        .count(short_query)
        .then(counters_number => request_counters(
          counter_model
            .find(full_query)
            .limit(counters_number + 1),
          response,
          next_handler
        ))
        .catch(next_handler)
    }
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
