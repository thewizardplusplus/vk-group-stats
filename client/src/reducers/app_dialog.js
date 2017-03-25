import {APP_DIALOG_OPEN, APP_DIALOG_CLOSE} from '../actions/app_dialog'
import {initialOpenableState} from './common'
import {handleActions} from 'redux-actions'

export const appDialog = handleActions({
  [APP_DIALOG_OPEN]: (state, action) => ({
    ...state,
    open: true,
  }),
  [APP_DIALOG_CLOSE]: (state, action) => ({
    ...state,
    open: false,
  }),
}, initialOpenableState)
