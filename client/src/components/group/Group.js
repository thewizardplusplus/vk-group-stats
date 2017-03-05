import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

export default class Group extends React.Component {
  static propTypes = {
    group: React.PropTypes.shape({
      screen_name: React.PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    return <Card>
      <CardHeader title={this.props.group.screen_name} />
      <CardText>
        Dump text.
      </CardText>
    </Card>
  }
}
