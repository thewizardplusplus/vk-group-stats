import React from 'react'
import {ALL_STATES} from '../../common/states'
import {List, ListItem} from 'material-ui/List'
import StatefulGroup from '../stateful_group/StatefulGroup'

export default class GroupList extends React.Component {
  static propTypes = {
    groups: React.PropTypes.arrayOf(React.PropTypes.shape({
      state: React.PropTypes.oneOf(ALL_STATES).isRequired,
      data: React.PropTypes.shape({
        _id: React.PropTypes.string.isRequired,
        photo: React.PropTypes.string,
        name: React.PropTypes.string,
        screen_name: React.PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
    onGroupUpdate: React.PropTypes.func.isRequired,
    onGroupRemove: React.PropTypes.func.isRequired,
  }

  render() {
    return <List>
      {this.props.groups.map(group => {
        return <ListItem key={group.data._id}>
          <StatefulGroup
            state={group.state}
            group={group.data}
            onUpdate={() => this.props.onGroupUpdate(group.data._id)}
            onRemove={() => this.props.onGroupRemove(group.data._id)} />
        </ListItem>
      })}
    </List>
  }
}
