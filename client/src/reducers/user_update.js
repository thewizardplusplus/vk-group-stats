import {USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE} from '../actions/user_update'
import {FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../common/states'
import {initialLoginState} from './common'
import {handleActions} from 'redux-actions'

export const userUpdate = handleActions({
  [USER_UPDATE_REQUEST]: (state, action) => ({
    ...state,
    user: {
      ...state.user,
      state: FETCHING_STATE,
    },
  }),
  [USER_UPDATE_SUCCESS]: (state, action) => ({
    ...state,
    user: {
      state: SUCCESS_STATE,
      data: action.payload,
    },
  }),
  [USER_UPDATE_FAILURE]: (state, action) => ({
    ...state,
    user: {
      ...state.user,
      state: FAILURE_STATE,
    },
  }),
}, initialLoginState)
