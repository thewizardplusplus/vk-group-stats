import uuidV4 from 'uuid/v4'
import {groupAddRequest, groupAddSuccess, groupAddFailure} from './group_add_sync'
import logError from './logger'

export function addGroup(screen_name) {
  return function(dispatch) {
    const fake_group_id = uuidV4()
    dispatch(groupAddRequest(fake_group_id))

    return fetch('/api/v1/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          screen_name,
        }),
      })
      .then(response => response.json())
      .then(json => {
        if (typeof json.data !== 'undefined' && json.data) {
          dispatch(groupAddSuccess({
            fake_group_id,
            new_group: json.data,
          }))
        } else if (typeof json.errors !== 'undefined') {
          json.errors.forEach(logError)
          dispatch(groupAddFailure(fake_group_id))
        } else {
          throw new Error('API response is incorrect')
        }
      })
      .catch(error => {
        logError(error)
        dispatch(groupAddFailure(fake_group_id))
      })
  }
}
