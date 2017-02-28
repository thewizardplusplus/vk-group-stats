import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Icon from '../icon/Icon'
import './app.css'

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <div className="app-header">
            <h2>Статистика сообществ ВКонтакте</h2>
          </div>
          <p className="app-intro">
            Hello, world! <Icon name="cake" />
          </p>
        </div>
      </MuiThemeProvider>
    )
  }
}
