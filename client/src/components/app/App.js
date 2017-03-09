import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {DrivedMainMenu} from '../../containers/drived_main_menu/DrivedMainMenu'
import AppBar from 'material-ui/AppBar'
import {DrivedGroupList} from '../../containers/drived_group_list/DrivedGroupList'
import {DrivedGroupDialog} from '../../containers/drived_group_dialog/DrivedGroupDialog'
import {DrivedUpdateButton} from '../../containers/drived_update_button/DrivedUpdateButton'
import './app.css'

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar
            title="Статистика сообществ ВКонтакте"
            showMenuIconButton={false}
            iconElementRight={<DrivedMainMenu />} />
          <DrivedGroupList />
          <DrivedGroupDialog />
          <DrivedUpdateButton />
        </div>
      </MuiThemeProvider>
    )
  }
}
