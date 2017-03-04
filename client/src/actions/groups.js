import {createAction} from 'redux-actions'

export const GROUPS_REQUEST = 'GROUPS_REQUEST'
export const GROUPS_SUCCESS = 'GROUPS_SUCCESS'
export const GROUPS_FAILURE = 'GROUPS_FAILURE'

const groupsRequest = createAction(GROUPS_REQUEST)
const groupsSuccess = createAction(GROUPS_SUCCESS)
const groupsFailure = createAction(GROUPS_FAILURE)
export function fetchGroups() {
  return function(dispatch) {
    dispatch(groupsRequest())

    return fetch('/api/v1/groups')
      .then(response => response.json())
      .then(json => {
        if (typeof json.data !== 'undefined') {
          dispatch(groupsSuccess(json.data))
        } else if (typeof json.errors !== 'undefined') {
          dispatch(groupsFailure(json.errors))
        } else {
          throw new Error('API response is incorrect')
        }
      })
      .catch(error => dispatch(groupsFailure([{
        message: error.message,
      }])))
  }
}
