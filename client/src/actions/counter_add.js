import {createAction} from 'redux-actions'
import logError from './logger'

export const COUNTER_ADD_REQUEST = 'COUNTER_ADD_REQUEST'
export const COUNTER_ADD_SUCCESS = 'COUNTER_ADD_SUCCESS'
export const COUNTER_ADD_FAILURE = 'COUNTER_ADD_FAILURE'

const counterAddRequest = createAction(COUNTER_ADD_REQUEST)
const counterAddSuccess = createAction(COUNTER_ADD_SUCCESS)
const counterAddFailure = createAction(COUNTER_ADD_FAILURE)
export function addCounter(group_id) {
  return function(dispatch) {
    dispatch(counterAddRequest(group_id))

    return fetch(`/api/v1/groups/${group_id}/counters`, {
        method: 'POST',
        credentials: 'same-origin',
      })
      .then(response => response.json())
      .then(json => {
        if (typeof json.data !== 'undefined' && json.data) {
          dispatch(counterAddSuccess({
            group_id,
            new_counter: json.data,
          }))
        } else if (typeof json.errors !== 'undefined') {
          json.errors.forEach(logError)
          dispatch(counterAddFailure(group_id))
        } else {
          throw new Error('API response is incorrect')
        }
      })
      .catch(error => {
        logError(error)
        dispatch(counterAddFailure(group_id))
      })
  }
}
