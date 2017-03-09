import React from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import {DrivedCountersTable} from '../../containers/drived_counters_table/DrivedCountersTable'
import IconButton from '../icon_button/IconButton'

export default class Group extends React.Component {
  static propTypes = {
    group: React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      screen_name: React.PropTypes.string.isRequired,
    }).isRequired,
    onRemove: React.PropTypes.func.isRequired,
  }

  render() {
    return <Card>
      <CardHeader title={this.props.group.screen_name} />
      <CardText>
        <DrivedCountersTable groupId={this.props.group._id} />
      </CardText>
      <CardActions>
        <IconButton
          icon="delete"
          text="Удалить"
          onClick={this.props.onRemove} />
      </CardActions>
    </Card>
  }
}
