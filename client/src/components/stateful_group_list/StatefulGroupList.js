import React from 'react'
import {ALL_STATES} from '../../common/states'
import StatefulBlock from '../stateful_block/StatefulBlock'
import GroupList from '../group_list/GroupList'

export default class StatefulGroupList extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    groups: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      screen_name: React.PropTypes.string.isRequired,
    })).isRequired,
    onMount: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    return <StatefulBlock state={this.props.state}>
      <GroupList groups={this.props.groups} />
    </StatefulBlock>
  }
}
