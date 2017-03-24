import thunkMiddleware from 'redux-thunk'
import {applyMiddleware} from 'redux'

export const middlewares = applyMiddleware(thunkMiddleware)
