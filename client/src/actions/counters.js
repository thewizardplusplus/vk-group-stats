import {createAction} from 'redux-actions'
import moment from 'moment'
import logError from './logger'

export const COUNTERS_REQUEST = 'COUNTERS_REQUEST'
export const COUNTERS_SUCCESS = 'COUNTERS_SUCCESS'
export const COUNTERS_FAILURE = 'COUNTERS_FAILURE'

const countersRequest = createAction(COUNTERS_REQUEST)
const countersSuccess = createAction(COUNTERS_SUCCESS)
const countersFailure = createAction(COUNTERS_FAILURE)

function extendByDelta(counters) {
  const extended_counters = []
  let previous_counter = undefined
  for (let i = counters.length - 1; i >= 0; --i) {
    const counter = {...counters[i]}
    if (typeof previous_counter !== 'undefined') {
      counter.delta = counter.value - previous_counter
    }

    extended_counters.unshift(counter)
    previous_counter = counter.value
  }

  return extended_counters
}

const start_timestamp_shift = 60 * 60 * 24
export function fetchCounters(group_id) {
  return function(dispatch) {
    dispatch(countersRequest(group_id))

    const start_timestamp = moment()
      .subtract(start_timestamp_shift, 'seconds')
      .format('YYYY-MM-DDTHH:mm:ssZZ')
    return fetch(
        `/api/v1/groups/${group_id}/counters?`
          + `start_timestamp=${encodeURIComponent(start_timestamp)}`
      )
      .then(response => response.json())
      .then(json => {
        if (typeof json.data !== 'undefined') {
          dispatch(countersSuccess({
            group_id,
            counters: extendByDelta(json.data),
          }))
        } else if (typeof json.errors !== 'undefined') {
          json.errors.forEach(logError)
          dispatch(countersFailure(group_id))
        } else {
          throw new Error('API response is incorrect')
        }
      })
      .catch(error => {
        logError(error)
        dispatch(countersFailure(group_id))
      })
  }
}
