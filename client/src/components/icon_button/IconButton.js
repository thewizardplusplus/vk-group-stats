import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Icon from '../icon/Icon'

export default class IconButton extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['primary', 'secondary', 'disabled']),
    onClick: React.PropTypes.func.isRequired,
  }

  render() {
    return <FlatButton
      icon={<Icon name={this.props.icon} />}
      label={this.props.text}
      primary={this.props.type === 'primary'}
      secondary={this.props.type === 'secondary'}
      disabled={this.props.type === 'disabled'}
      onTouchTap={this.props.onClick} />
  }
}
