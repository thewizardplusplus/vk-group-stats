import React from 'react'
import IconicButton from '../iconic_button/IconicButton'

export default class SideMenuButton extends React.Component {
  // this name required by the AppBar component for a correct styles processing
  static muiName = 'IconButton'
  static propTypes = {
    iconStyle: React.PropTypes.object,
    onClick: React.PropTypes.func,
  }

  render() {
    return <IconicButton
      icon="menu"
      iconStyle={this.props.iconStyle}
      onTouchTap={this.props.onClick} />
  }
}
