import {GROUP_ADD_REQUEST, GROUP_ADD_SUCCESS, GROUP_ADD_FAILURE} from '../actions/group_add'
import {FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../common/states'
import {setGroupState, initialGroupsState} from './common'
import {handleActions} from 'redux-actions'

export const groupAdd = handleActions({
  [GROUP_ADD_REQUEST]: (state, action) => ({
    ...state,
    items: [{
      state: FETCHING_STATE,
      data: {
        _id: action.payload,
        screen_name: '',
      },
    }, ...state.items],
  }),
  [GROUP_ADD_SUCCESS]: (state, action) => ({
    ...state,
    items: [{
      state: SUCCESS_STATE,
      data: action.payload.new_group,
    }, ...state.items.filter(
      group => group.data._id !== action.payload.fake_group_id
    )],
  }),
  [GROUP_ADD_FAILURE]: (state, action) => ({
    ...state,
    items: setGroupState(state.items, action.payload, FAILURE_STATE),
  }),
}, initialGroupsState)
