import {COUNTER_ADD_REQUEST, COUNTER_ADD_SUCCESS, COUNTER_ADD_FAILURE} from '../actions/counter_add_sunc'
import {FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../common/states'
import {setCountersState, updateGroup, initialCollectionState} from './common'
import {handleActions} from 'redux-actions'

export const counterAdd = handleActions({
  [COUNTER_ADD_REQUEST]: (state, action) => ({
    ...state,
    items: setCountersState(state.items, action.payload, FETCHING_STATE),
  }),
  [COUNTER_ADD_SUCCESS]: (state, action) => ({
    ...state,
    items: updateGroup(state.items, action.payload.group_id, group => ({
      ...group,
      counters: {
        state: SUCCESS_STATE,
        items: [{
          ...action.payload.new_counter,
          delta: group.counters.items.length !== 0
            ? action.payload.new_counter.value - group.counters.items[0].value
            : undefined,
        }, ...group.counters.items],
      },
    })),
  }),
  [COUNTER_ADD_FAILURE]: (state, action) => ({
    ...state,
    items: setCountersState(state.items, action.payload, FAILURE_STATE),
  }),
}, initialCollectionState)
