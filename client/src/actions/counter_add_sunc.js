import {createAction} from 'redux-actions'

export const COUNTER_ADD_REQUEST = 'COUNTER_ADD_REQUEST'
export const COUNTER_ADD_SUCCESS = 'COUNTER_ADD_SUCCESS'
export const COUNTER_ADD_FAILURE = 'COUNTER_ADD_FAILURE'

export const counterAddRequest = createAction(COUNTER_ADD_REQUEST)
export const counterAddSuccess = createAction(COUNTER_ADD_SUCCESS)
export const counterAddFailure = createAction(COUNTER_ADD_FAILURE)
