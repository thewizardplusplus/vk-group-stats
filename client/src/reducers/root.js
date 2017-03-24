import {login} from './login.js'
import {appDialog} from './app_dialog.js'
import {groupDialog} from './group_dialog.js'
import {groups} from './groups.js'
import {groupRemove} from './group_remove.js'
import {groupAdd} from './group_add.js'
import {groupUpdate} from './group_update.js'
import {counters} from './counters.js'
import {counterAdd} from './counter_add.js'
import reduceReducers from 'reduce-reducers'
import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  login,
  appDialog,
  groupDialog,
  groups: reduceReducers(
    groups,
    groupRemove,
    groupAdd,
    groupUpdate,
    counters,
    counterAdd
  ),
  router: routerReducer,
})
