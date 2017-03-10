import React from 'react'
import Icon from '../icon/Icon'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

export default class MainMenu extends React.Component {
  static propTypes = {
    onRefresh: React.PropTypes.func.isRequired,
    onGroupAdd: React.PropTypes.func.isRequired,
    onAbout: React.PropTypes.func.isRequired,
  }

  render() {
    return <IconMenu
      iconButtonElement={<IconButton><Icon name="more_vert" /></IconButton>}>
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
    </IconMenu>
  }
}
