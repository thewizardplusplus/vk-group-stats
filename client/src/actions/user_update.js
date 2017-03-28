import {createAction} from 'redux-actions'
import logError from './logger'

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE'

const userUpdateRequest = createAction(USER_UPDATE_REQUEST)
const userUpdateSuccess = createAction(USER_UPDATE_SUCCESS)
const userUpdateFailure = createAction(USER_UPDATE_FAILURE)
export function updateUser() {
  return function(dispatch) {
    dispatch(userUpdateRequest())

    return fetch('/api/v1/users/me', {
        method: 'POST',
        credentials: 'same-origin',
      })
      .then(response => response.json())
      .then(json => {
        if (typeof json.data !== 'undefined' && json.data) {
          dispatch(userUpdateSuccess(json.data))
        } else if (typeof json.errors !== 'undefined') {
          json.errors.forEach(logError)
          dispatch(userUpdateFailure())
        } else {
          throw new Error('API response is incorrect')
        }
      })
      .catch(error => {
        logError(error)
        dispatch(userUpdateFailure())
      })
  }
}
