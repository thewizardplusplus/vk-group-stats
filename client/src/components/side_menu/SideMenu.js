import React from 'react'
import Drawer from 'material-ui/Drawer'
import Icon from '../icon/Icon'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'

export default class SideMenu extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    routeTo: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired,
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
      <AppBar
        title="Меню"
        iconElementLeft={<IconButton><Icon name="menu" /></IconButton>} />
      <MenuItem
        leftIcon={<Icon name="format_list_bulleted" />}
        primaryText="Главная"
        onTouchTap={() => this.routeTo('/')} />
      <MenuItem
        leftIcon={<Icon name="info_outline" />}
        primaryText="О сервисе"
        onTouchTap={() => this.routeTo('/about')} />
    </Drawer>
  }
}
