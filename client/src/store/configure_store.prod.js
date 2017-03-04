import {rootReducer} from '../reducers/root'
import {thunkEnhancer} from './thunk_enhancer'
import {createStore} from 'redux'

export default function configureStore() {
  return createStore(rootReducer, thunkEnhancer)
}
