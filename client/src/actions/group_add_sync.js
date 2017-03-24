import {createAction} from 'redux-actions'

export const GROUP_ADD_REQUEST = 'GROUP_ADD_REQUEST'
export const GROUP_ADD_SUCCESS = 'GROUP_ADD_SUCCESS'
export const GROUP_ADD_FAILURE = 'GROUP_ADD_FAILURE'

export const groupAddRequest = createAction(GROUP_ADD_REQUEST)
export const groupAddSuccess = createAction(GROUP_ADD_SUCCESS)
export const groupAddFailure = createAction(GROUP_ADD_FAILURE)
