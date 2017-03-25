import React from 'react'
import {DrivedSideMenuButton} from '../../containers/drived_side_menu_button/DrivedSideMenuButton'
import {DrivedMainMenu} from '../../containers/drived_main_menu/DrivedMainMenu'
import ApplicationBar from 'material-ui/AppBar'
import IconButton from '../icon_button/IconButton'

export default class AppBar extends React.Component {
  static propTypes = {
    isLogged: React.PropTypes.bool.isRequired,
  }

  render() {
    let appBar = null
    const title = 'Статистика сообществ ВКонтакте'
    if (this.props.isLogged) {
      appBar = <ApplicationBar
        title={title}
        iconElementLeft={<DrivedSideMenuButton />}
        iconElementRight={<DrivedMainMenu />} />
    } else {
      appBar = <ApplicationBar
        title={title}
        showMenuIconButton={false}
        iconElementRight={<IconButton
          icon="lock"
          text="Войти"
          onClick={() => window.location = '/authentication/vk'} />} />
    }

    return appBar
  }
}
