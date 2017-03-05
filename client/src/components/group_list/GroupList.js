import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Group from '../group/Group'

export default class GroupList extends React.Component {
  static propTypes = {
    groups: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      screen_name: React.PropTypes.string.isRequired,
    })).isRequired,
  }

  render() {
    return <List>
      {this.props.groups.map(group => {
        return <ListItem key={group._id}>
          <Group group={group} />
        </ListItem>
      })}
    </List>
  }
}
