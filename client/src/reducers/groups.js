import {GROUPS_REQUEST, GROUPS_SUCCESS, GROUPS_FAILURE} from '../actions/groups'
import {handleActions} from 'redux-actions'

export const groups = handleActions({
  [GROUPS_REQUEST]: (state, action) => ({
    ...state,
    state: 'fetching',
  }),
  [GROUPS_SUCCESS]: (state, action) => ({
    ...state,
    state: 'success',
    items: action.payload,
  }),
  [GROUPS_FAILURE]: (state, action) => ({
    ...state,
    state: 'failure',
  }),
}, {
  state: 'success',
  items: []
})
