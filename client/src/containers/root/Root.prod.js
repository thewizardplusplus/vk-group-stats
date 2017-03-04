import React from 'react'
import {Provider} from 'react-redux'
import App from '../../components/app/App'

export default class Root extends React.Component {
  render() {
    return <Provider store={this.props.store}>
      <App />
    </Provider>
  }
}
