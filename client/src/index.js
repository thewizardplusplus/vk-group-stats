import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configure_store'
import Root from './containers/root/Root'
import ReactDOM from 'react-dom'
import {fetchGroups} from './actions/groups'

// needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore()
ReactDOM.render(<Root store={store} />, document.getElementById('root'))

store.dispatch(fetchGroups()).then(() =>
  console.log(store.getState())
)
