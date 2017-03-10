import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login'
import {FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../common/states'
import {handleActions} from 'redux-actions'

export const login = handleActions({
  [LOGIN_REQUEST]: (state, action) => ({
    ...state,
    state: FETCHING_STATE,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    state: SUCCESS_STATE,
    isLogged: action.payload !== null,
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    state: FAILURE_STATE,
  }),
}, {
  state: SUCCESS_STATE,
  isLogged: false,
})
