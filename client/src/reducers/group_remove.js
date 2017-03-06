import {GROUP_REMOVE_REQUEST, GROUP_REMOVE_SUCCESS, GROUP_REMOVE_FAILURE} from '../actions/group_remove'
import {FETCHING_STATE, FAILURE_STATE} from '../common/states'
import {initialGroupsState} from './initial_groups_state'
import {handleActions} from 'redux-actions'

function setGroupState(groups, group_id, group_state) {
  return groups.map(group => {
    return group.data._id !== group_id ? group : {
      ...group,
      state: group_state,
    }
  })
}

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
