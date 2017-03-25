import React from 'react'
import IconButton from 'material-ui/IconButton'
import Icon from '../icon/Icon'

export default class SideMenuButton extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
  }

  render() {
    return <IconButton onTouchTap={this.props.onClick}>
      <Icon name="menu" />
    </IconButton>
  }
}
