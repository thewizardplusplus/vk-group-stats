import {history} from '../common/history'
import {routerMiddleware as routerMiddlewareGenerator} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware} from 'redux'

const routerMiddleware = routerMiddlewareGenerator(history)
export const middlewares = applyMiddleware(thunkMiddleware, routerMiddleware)
