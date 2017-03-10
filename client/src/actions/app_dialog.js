import {createAction} from 'redux-actions'

export const APP_DIALOG_OPEN = 'APP_DIALOG_OPEN'
export const APP_DIALOG_CLOSE = 'APP_DIALOG_CLOSE'

export const appDialogOpen = createAction(APP_DIALOG_OPEN)
export const appDialogClose = createAction(APP_DIALOG_CLOSE)
