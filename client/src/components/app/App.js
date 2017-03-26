import React from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {DrivedAppBar} from '../../containers/drived_app_bar/DrivedAppBar'
import {DrivedGate} from '../../containers/drived_gate/DrivedGate'
import {DrivedSideMenu} from '../../containers/drived_side_menu/DrivedSideMenu'
import Router from '../../containers/router/Router'
import './app.css'

export default class App extends React.Component {
  getMuiTheme() {
    const useDarkMuiTheme = process.env.REACT_APP_USE_LIGHT_THEME !== 'TRUE'
    return getMuiTheme(useDarkMuiTheme ? darkBaseTheme : lightBaseTheme, {
      palette: {
        // lambda hex_color, factor: '#' + ''.join(
        //   hex(round(int(hex_color[i : i+2], 16) * factor))[2:]
        //   for i in range(1, 7, 2)
        // )
        counterLossColor: useDarkMuiTheme ? '#86696d' : '#eab8bf',
        counterGainColor: useDarkMuiTheme ? '#697b77' : '#b8d7d0',
      },
    })
  }

  render() {
    const muiTheme = this.getMuiTheme()
    document.body.style.backgroundColor = muiTheme.palette.canvasColor

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <DrivedAppBar />
          <DrivedGate>
            <div>
              <DrivedSideMenu />
              <Router />
            </div>
          </DrivedGate>
        </div>
      </MuiThemeProvider>
    )
  }
}
