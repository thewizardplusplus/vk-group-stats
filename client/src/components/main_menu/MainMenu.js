import React from 'react'
import Icon from '../icon/Icon'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

export default class MainMenu extends React.Component {
  static propTypes = {
    onGroupAdd: React.PropTypes.func.isRequired,
  }

  render() {
    return <IconMenu
      iconButtonElement={<IconButton><Icon name="more_vert" /></IconButton>}>
      <MenuItem
        leftIcon={<Icon name="add" />}
        primaryText="Добавить группу"
        onTouchTap={this.props.onGroupAdd} />
    </IconMenu>
  }
}
