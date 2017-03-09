import {GROUPS_REQUEST, GROUPS_SUCCESS, GROUPS_FAILURE} from '../actions/groups'
import {FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../common/states'
import {initialCollectionState} from './common'
import {handleActions} from 'redux-actions'

export const groups = handleActions({
  [GROUPS_REQUEST]: (state, action) => ({
    ...state,
    state: FETCHING_STATE,
  }),
  [GROUPS_SUCCESS]: (state, action) => ({
    ...state,
    state: SUCCESS_STATE,
    items: action.payload.map(group => ({
      state: SUCCESS_STATE,
      data: group,
      counters: initialCollectionState,
    })),
  }),
  [GROUPS_FAILURE]: (state, action) => ({
    ...state,
    state: FAILURE_STATE,
  }),
}, initialCollectionState)
