import {GROUP_REMOVE_REQUEST, GROUP_REMOVE_SUCCESS, GROUP_REMOVE_FAILURE} from '../actions/group_remove'
import {FETCHING_STATE, FAILURE_STATE} from '../common/states'
import {setGroupState, initialGroupsState} from './common'
import {handleActions} from 'redux-actions'

export const groupRemove = handleActions({
  [GROUP_REMOVE_REQUEST]: (state, action) => ({
    ...state,
    items: setGroupState(state.items, action.payload, FETCHING_STATE),
  }),
  [GROUP_REMOVE_SUCCESS]: (state, action) => ({
    ...state,
    items: state.items.filter(group => group.data._id !== action.payload),
  }),
  [GROUP_REMOVE_FAILURE]: (state, action) => ({
    ...state,
    items: setGroupState(state.items, action.payload, FAILURE_STATE),
  }),
}, initialGroupsState)
