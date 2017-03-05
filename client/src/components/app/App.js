import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {DrivedGroupList} from '../../containers/drived_group_list/DrivedGroupList'
import './app.css'

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar
            title="Статистика сообществ ВКонтакте"
            showMenuIconButton={false} />
          <DrivedGroupList />
        </div>
      </MuiThemeProvider>
    )
  }
}
