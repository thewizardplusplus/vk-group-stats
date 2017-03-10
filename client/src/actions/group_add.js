import {createAction} from 'redux-actions'
import uuidV4 from 'uuid/v4'
import logError from './logger'

export const GROUP_ADD_REQUEST = 'GROUP_ADD_REQUEST'
export const GROUP_ADD_SUCCESS = 'GROUP_ADD_SUCCESS'
export const GROUP_ADD_FAILURE = 'GROUP_ADD_FAILURE'

const groupAddRequest = createAction(GROUP_ADD_REQUEST)
const groupAddSuccess = createAction(GROUP_ADD_SUCCESS)
const groupAddFailure = createAction(GROUP_ADD_FAILURE)
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
