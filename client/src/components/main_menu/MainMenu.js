import React from 'react'
import IconButton from '../icon_button/IconButton'
import IconicButton from '../iconic_button/IconicButton'
import Icon from '../icon/Icon'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

export default class MainMenu extends React.Component {
  // this name required by the AppBar component for a correct styles processing
  static muiName = 'IconButton'
  static propTypes = {
    isLogged: React.PropTypes.bool.isRequired,
    iconStyle: React.PropTypes.object,
    onRefresh: React.PropTypes.func.isRequired,
    onGroupAdd: React.PropTypes.func.isRequired,
    onAbout: React.PropTypes.func.isRequired,
  }

  loadUrl = url => {
    window.location = url
  }

  render() {
    if (!this.props.isLogged) {
      return <IconButton
        icon="lock"
        text="Войти"
        onClick={() => this.loadUrl('/authentication/vk')} />
    }

    return <IconMenu
      iconButtonElement={<IconicButton
        icon="more_vert"
        iconStyle={this.props.iconStyle} />}>
      <MenuItem
        leftIcon={<Icon name="refresh" />}
        primaryText="Перезагрузить"
        onTouchTap={this.props.onRefresh} />
      <MenuItem
        leftIcon={<Icon name="add" />}
        primaryText="Добавить группу"
        onTouchTap={this.props.onGroupAdd} />
      <MenuItem
        leftIcon={<Icon name="info_outline" />}
        primaryText="О сервисе"
        onTouchTap={this.props.onAbout} />
      <Divider />
      <MenuItem
        leftIcon={<Icon name="exit_to_app" />}
        primaryText="Выйти"
        onTouchTap={() => this.loadUrl('/logout')} />
    </IconMenu>
  }
}
