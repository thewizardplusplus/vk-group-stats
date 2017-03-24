import {rootReducer} from '../reducers/root'
import {middlewares} from './middlewares'
import {createStore} from 'redux'

export default function configureStore() {
  return createStore(rootReducer, middlewares)
}
