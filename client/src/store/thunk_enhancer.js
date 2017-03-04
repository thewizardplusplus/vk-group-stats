import thunkMiddleware from 'redux-thunk'
import {applyMiddleware} from 'redux'

export const thunkEnhancer = applyMiddleware(thunkMiddleware)
