import {thunkEnhancer} from './thunk_enhancer'
import {DevTools} from '../containers/dev_tools/DevTools'
import {persistState} from 'redux-devtools'
import {compose, createStore} from 'redux'
import {rootReducer} from '../reducers/root'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

const enhancer = compose(
  thunkEnhancer,
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)
export default function configureStore() {
  const store = createStore(rootReducer, enhancer)
  if (module.hot) {
    module.hot.accept([
      '../reducers/groups',
      '../reducers/root',
    ], () => {
      store.replaceReducer(require('../reducers/root').rootReducer)
    })
  }

  return store
}
