import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import './icon.css'

export default class Icon extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    color: React.PropTypes.string,
    style: React.PropTypes.object,
  }

  render() {
    return <FontIcon
      className="material-icons Icon-icon"
      color={this.props.color}
      style={this.props.style}>
      {this.props.name}
    </FontIcon>
  }
}
