import {createAction} from 'redux-actions'

export const GROUP_DIALOG_OPEN = 'GROUP_DIALOG_OPEN'
export const GROUP_DIALOG_CLOSE = 'GROUP_DIALOG_CLOSE'

export const groupDialogOpen = createAction(GROUP_DIALOG_OPEN)
export const groupDialogClose = createAction(GROUP_DIALOG_CLOSE)
