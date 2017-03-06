import {groups} from './groups.js'
import {groupRemove} from './group_remove.js'
import reduceReducers from 'reduce-reducers'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  groups: reduceReducers(groups, groupRemove),
})
