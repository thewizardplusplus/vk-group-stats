import {SIDE_MENU_OPEN, SIDE_MENU_CLOSE} from '../actions/side_menu'
import {initialOpenableState} from './common'
import {handleActions} from 'redux-actions'

export const sideMenu = handleActions({
  [SIDE_MENU_OPEN]: (state, action) => ({
    ...state,
    open: true,
  }),
  [SIDE_MENU_CLOSE]: (state, action) => ({
    ...state,
    open: false,
  }),
}, initialOpenableState)
