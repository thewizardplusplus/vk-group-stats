import {createAction} from 'redux-actions'

export const SIDE_MENU_OPEN = 'SIDE_MENU_OPEN'
export const SIDE_MENU_CLOSE = 'SIDE_MENU_CLOSE'

export const sideMenuOpen = createAction(SIDE_MENU_OPEN)
export const sideMenuClose = createAction(SIDE_MENU_CLOSE)
