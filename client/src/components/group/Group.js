import React from 'react'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import {DrivedCountersTable} from '../../containers/drived_counters_table/DrivedCountersTable'
import IconButton from '../icon_button/IconButton'

export default class Group extends React.Component {
  static propTypes = {
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
    let header = null
    if (
      typeof this.props.group.name === 'undefined'
      && typeof this.props.group.photo === 'undefined'
    ) {
      header = <CardHeader title={this.props.group.screen_name} />
    } else if (typeof this.props.group.photo === 'undefined') {
      header = <CardHeader
        title={this.props.group.name}
        subtitle={this.props.group.screen_name} />
    } else if (typeof this.props.group.name === 'undefined') {
      header = <CardHeader
        avatar={this.props.group.photo}
        title={this.props.group.screen_name} />
    } else {
      header = <CardHeader
        avatar={this.props.group.photo}
        title={this.props.group.name}
        subtitle={this.props.group.screen_name} />
    }

    return <Card>
      {header}
      <CardText>
        <DrivedCountersTable groupId={this.props.group._id} />
      </CardText>
      <CardActions>
        <IconButton
          icon="update"
          text="Обновить"
          onClick={this.props.onUpdate} />
        <IconButton
          icon="delete"
          text="Удалить"
          onClick={this.props.onRemove} />
      </CardActions>
    </Card>
  }
}
