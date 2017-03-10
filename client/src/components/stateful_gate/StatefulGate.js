import React from 'react'
import {ALL_STATES} from '../../common/states'
import StatefulBlock from '../stateful_block/StatefulBlock'
import Gate from '../gate/Gate'

export default class StatefulGate extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    open: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    onMount: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    return <StatefulBlock state={this.props.state}>
      <Gate open={this.props.open}>
        {this.props.children}
      </Gate>
    </StatefulBlock>
  }
}
