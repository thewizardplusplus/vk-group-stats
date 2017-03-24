import {middlewares} from './middlewares'
import {DevTools} from '../containers/dev_tools/DevTools'
import {persistState} from 'redux-devtools'
import {compose, createStore} from 'redux'
import {rootReducer} from '../reducers/root'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

const enhancer = compose(
  middlewares,
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)
export default function configureStore() {
  const store = createStore(rootReducer, enhancer)
  if (module.hot) {
    module.hot.accept('../reducers/root', () => {
      store.replaceReducer(require('../reducers/root').rootReducer)
    })
  }

  return store
}
