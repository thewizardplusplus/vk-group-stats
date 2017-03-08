import {GROUP_DIALOG_OPEN, GROUP_DIALOG_CLOSE} from '../actions/group_dialog'
import {handleActions} from 'redux-actions'

export const groupDialog = handleActions({
  [GROUP_DIALOG_OPEN]: (state, action) => ({
    ...state,
    open: true,
  }),
  [GROUP_DIALOG_CLOSE]: (state, action) => ({
    ...state,
    open: false,
  }),
}, {
  open: false,
})
