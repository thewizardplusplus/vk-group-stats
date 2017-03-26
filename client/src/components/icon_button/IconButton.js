import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Icon from '../icon/Icon'

export default class IconButton extends React.Component {
  // this name required by the AppBar component for a correct styles processing
  static muiName = 'FlatButton'
  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['primary', 'secondary', 'disabled']),
    style: React.PropTypes.object,
    onClick: React.PropTypes.func.isRequired,
  }

  render() {
    return <FlatButton
      icon={<Icon name={this.props.icon} />}
      label={this.props.text}
      primary={this.props.type === 'primary'}
      secondary={this.props.type === 'secondary'}
      disabled={this.props.type === 'disabled'}
      style={this.props.style}
      onTouchTap={this.props.onClick} />
  }
}
