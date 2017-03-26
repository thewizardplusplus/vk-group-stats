import React from 'react'
import {ALL_STATES} from '../../common/states'
import StatefulBlock from '../stateful_block/StatefulBlock'
import CountersTable from '../counters_table/CountersTable'

export default class StatefulCountersTable extends React.Component {
  static propTypes = {
    groupId: React.PropTypes.string.isRequired,
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    counters: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      timestamp: React.PropTypes.string.isRequired,
      value: React.PropTypes.number.isRequired,
      delta: React.PropTypes.number,
    })).isRequired,
    onMount: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.onMount(this.props.groupId)
  }

  render() {
    return <StatefulBlock state={this.props.state} additionalBlocksNumber={0}>
      <CountersTable counters={this.props.counters} />
    </StatefulBlock>
  }
}
