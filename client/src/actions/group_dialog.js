import {createAction} from 'redux-actions'

export const GROUP_DIALOG_OPEN = 'GROUP_DIALOG_OPEN'
export const GROUP_DIALOG_REJECT = 'GROUP_DIALOG_REJECT'

export const groupDialogOpen = createAction(GROUP_DIALOG_OPEN)
export const groupDialogReject = createAction(GROUP_DIALOG_REJECT)
