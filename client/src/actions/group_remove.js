import {createAction} from 'redux-actions'
import logError from './logger'

export const GROUP_REMOVE_REQUEST = 'GROUP_REMOVE_REQUEST'
export const GROUP_REMOVE_SUCCESS = 'GROUP_REMOVE_SUCCESS'
export const GROUP_REMOVE_FAILURE = 'GROUP_REMOVE_FAILURE'

const groupRemoveRequest = createAction(GROUP_REMOVE_REQUEST)
const groupRemoveSuccess = createAction(GROUP_REMOVE_SUCCESS)
const groupRemoveFailure = createAction(GROUP_REMOVE_FAILURE)
export function removeGroup(group_id) {
  return function(dispatch) {
    dispatch(groupRemoveRequest(group_id))

    return fetch(`/api/v1/groups/${group_id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(json => {
        if (typeof json.data !== 'undefined' && json.data) {
          dispatch(groupRemoveSuccess(group_id))
        } else if (typeof json.errors !== 'undefined') {
          json.errors.forEach(logError)
          dispatch(groupRemoveFailure(group_id))
        } else {
          throw new Error('API response is incorrect')
        }
      })
      .catch(error => {
        logError(error)
        dispatch(groupRemoveFailure(group_id))
      })
  }
}
