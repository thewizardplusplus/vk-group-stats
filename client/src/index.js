import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configure_store'
import Root from './containers/root/Root'
import ReactDOM from 'react-dom'

// needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('root')
)
