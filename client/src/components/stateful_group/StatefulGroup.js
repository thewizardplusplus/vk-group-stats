import React from 'react'
import {ALL_STATES} from '../../common/states'
import StatefulBlock from '../stateful_block/StatefulBlock'
import Group from '../group/Group'

export default class StatefulGroup extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    group: React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      photo: React.PropTypes.string,
      name: React.PropTypes.string,
      screen_name: React.PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
  }

  render() {
    return <StatefulBlock
      state={this.props.state}
      additionalBlocksNumber={1}
      hideRootAdditionalBlock={false}>
      <Group
        group={this.props.group}
        onUpdate={this.props.onUpdate}
        onRemove={this.props.onRemove} />
    </StatefulBlock>
  }
}
