import {GROUPS_REQUEST, GROUPS_SUCCESS, GROUPS_FAILURE} from '../actions/groups'
import {handleActions} from 'redux-actions'

export const groups = handleActions({
  [GROUPS_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  [GROUPS_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    items: action.payload,
  }),
  [GROUPS_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    errors: action.payload,
  }),
}, {
  isFetching: false,
  items: [],
  errors: [],
})
