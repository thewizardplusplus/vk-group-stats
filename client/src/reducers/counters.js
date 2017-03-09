import {COUNTERS_REQUEST, COUNTERS_SUCCESS, COUNTERS_FAILURE} from '../actions/counters'
import {FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../common/states'
import {setCountersState, updateGroup, initialCollectionState} from './common'
import {handleActions} from 'redux-actions'

export const counters = handleActions({
  [COUNTERS_REQUEST]: (state, action) => ({
    ...state,
    items: setCountersState(state.items, action.payload, FETCHING_STATE),
  }),
  [COUNTERS_SUCCESS]: (state, action) => ({
    ...state,
    items: updateGroup(state.items, action.payload.group_id, group => ({
      ...group,
      counters: {
        state: SUCCESS_STATE,
        items: action.payload.counters,
      },
    })),
  }),
  [COUNTERS_FAILURE]: (state, action) => ({
    ...state,
    items: setCountersState(state.items, action.payload, FAILURE_STATE),
  }),
}, initialCollectionState)
