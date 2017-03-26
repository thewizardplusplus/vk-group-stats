import React from 'react'
import IconButton from 'material-ui/IconButton'
import Icon from '../icon/Icon'

export default class IconicButton extends React.Component {
  // this name required by the AppBar component for a correct styles processing
  static muiName = 'IconButton'
  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    iconStyle: React.PropTypes.object,
    onTouchTap: React.PropTypes.func,
  }

  render() {
    return <IconButton
      iconStyle={this.props.iconStyle}
      onTouchTap={this.props.onTouchTap}>
      <Icon name={this.props.icon} />
    </IconButton>
  }
}
