import React from 'react'
import IconicButton from '../iconic_button/IconicButton'
import IconMenu from 'material-ui/IconMenu'
import Icon from '../icon/Icon'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

export default class MainMenu extends React.Component {
  // this name required by the AppBar component for a correct styles processing
  static muiName = 'IconButton'
  static propTypes = {
    iconStyle: React.PropTypes.object,
    onRefresh: React.PropTypes.func.isRequired,
    onGroupAdd: React.PropTypes.func.isRequired,
  }

  render() {
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
      <Divider />
      <MenuItem
        leftIcon={<Icon name="exit_to_app" />}
        primaryText="Выйти"
        onTouchTap={() => window.location = '/logout'} />
    </IconMenu>
  }
}
