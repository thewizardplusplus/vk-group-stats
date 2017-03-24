import {GROUP_UPDATE} from '../actions/group_update'
import {updateGroup, initialCollectionState} from './common'
import {handleActions} from 'redux-actions'

export const groupUpdate = handleActions({
  [GROUP_UPDATE]: (state, action) => ({
    ...state,
    items: updateGroup(state.items, action.payload._id, group => ({
      ...group,
      photo: action.payload.photo,
      name: action.payload.name,
    })),
  }),
}, initialCollectionState)
