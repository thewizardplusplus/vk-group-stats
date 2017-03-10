import {createAction} from 'redux-actions'
import logError from './logger'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

const loginRequest = createAction(LOGIN_REQUEST)
const loginSuccess = createAction(LOGIN_SUCCESS)
const loginFailure = createAction(LOGIN_FAILURE)
export function fetchLogin() {
  return function(dispatch) {
    dispatch(loginRequest())

    return fetch('/api/v1/users/me')
      .then(response => response.json())
      .then(json => {
        if (typeof json.data !== 'undefined') {
          dispatch(loginSuccess(json.data))
        } else if (typeof json.errors !== 'undefined') {
          json.errors.forEach(logError)
          dispatch(loginFailure())
        } else {
          throw new Error('API response is incorrect')
        }
      })
      .catch(error => {
        logError(error)
        dispatch(loginFailure())
      })
  }
}
