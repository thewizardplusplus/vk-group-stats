import {counterAddRequest, counterAddSuccess, counterAddFailure} from './counter_add_sunc'
import {groupUpdate} from './group_update'
import logError from './logger'

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
          dispatch(groupUpdate(json.data.group))
          dispatch(counterAddSuccess({
            group_id,
            new_counter: json.data.counter,
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
