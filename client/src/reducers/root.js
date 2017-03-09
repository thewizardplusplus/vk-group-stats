import {groupDialog} from './group_dialog.js'
import {groups} from './groups.js'
import {groupRemove} from './group_remove.js'
import {groupAdd} from './group_add.js'
import {counters} from './counters.js'
import reduceReducers from 'reduce-reducers'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  groupDialog,
  groups: reduceReducers(groups, groupRemove, groupAdd, counters),
})
