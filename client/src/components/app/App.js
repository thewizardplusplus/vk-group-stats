import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {DrivedMainMenu} from '../../containers/drived_main_menu/DrivedMainMenu'
import {DrivedGate} from '../../containers/drived_gate/DrivedGate'
import AppBar from 'material-ui/AppBar'
import {DrivedGroupList} from '../../containers/drived_group_list/DrivedGroupList'
import {DrivedGroupDialog} from '../../containers/drived_group_dialog/DrivedGroupDialog'
import {DrivedAppDialog} from '../../containers/drived_app_dialog/DrivedAppDialog'
import {DrivedUpdateButton} from '../../containers/drived_update_button/DrivedUpdateButton'
import './app.css'

export default class App extends React.Component {
  render() {
    const muiTheme = getMuiTheme(darkBaseTheme)
    document.body.style.backgroundColor = muiTheme.palette.canvasColor

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Статистика сообществ ВКонтакте"
            showMenuIconButton={false}
            iconElementRight={<DrivedMainMenu />} />
          <DrivedGate>
            <div>
              <DrivedGroupList />
              <DrivedGroupDialog />
              <DrivedAppDialog />
              <DrivedUpdateButton />
            </div>
          </DrivedGate>
        </div>
      </MuiThemeProvider>
    )
  }
}
