import React from 'react'

export default class Gate extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return this.props.open ? this.props.children : null
  }
}
