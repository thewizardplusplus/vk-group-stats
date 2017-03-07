import {groupDialog} from './group_dialog.js'
import {groups} from './groups.js'
import {groupRemove} from './group_remove.js'
import reduceReducers from 'reduce-reducers'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  groupDialog,
  groups: reduceReducers(groups, groupRemove),
})
