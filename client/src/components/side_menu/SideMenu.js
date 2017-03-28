import React from 'react'
import Drawer from 'material-ui/Drawer'
import SideMenuButton from '../side_menu_button/SideMenuButton'
import Icon from '../icon/Icon'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'

export default class SideMenu extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    route: React.PropTypes.string,
    routeTo: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired,
  }

  getFocusState = route => {
    return route === this.props.route ? 'keyboard-focused' : undefined
  }

  routeTo = route => {
    this.props.routeTo(route)
    this.props.onClose()
  }

  render() {
    return <Drawer
      docked={false}
      open={this.props.open}
      onRequestChange={this.props.onClose}>
      <AppBar title="Меню" iconElementLeft={<SideMenuButton />} />
      <MenuItem
        leftIcon={<Icon name="format_list_bulleted" />}
        primaryText="Главная"
        focusState={this.getFocusState('/')}
        onTouchTap={() => this.routeTo('/')} />
      <MenuItem
        leftIcon={<Icon name="person" />}
        primaryText="Профиль"
        focusState={this.getFocusState('/profile')}
        onTouchTap={() => this.routeTo('/profile')} />
      <MenuItem
        leftIcon={<Icon name="info_outline" />}
        primaryText="О сервисе"
        focusState={this.getFocusState('/about')}
        onTouchTap={() => this.routeTo('/about')} />
    </Drawer>
  }
}
