import React from 'react'
import {Card, CardHeader, CardActions} from 'material-ui/Card'
import Icon from '../icon/Icon'
import Avatar from 'material-ui/Avatar'
import IconButton from '../icon_button/IconButton'

export default class Profile extends React.Component {
  static propTypes = {
    user: React.PropTypes.shape({
      vk_id: React.PropTypes.number.isRequired,
      photo: React.PropTypes.string,
      name: React.PropTypes.string,
      screen_name: React.PropTypes.string,
    }).isRequired,
    onUpdate: React.PropTypes.func.isRequired,
  }

  render() {
    const avatar = this.props.user.photo
      || <Avatar icon={<Icon name="person" />} />
    const title = this.props.user.name
      || this.props.user.screen_name
      || this.props.user.vk_id
    const subtitle = typeof this.props.user.name !== 'undefined'
      ? this.props.user.screen_name || this.props.user.vk_id
      : (typeof this.props.user.screen_name !== 'undefined'
        ? this.props.user.vk_id
        : null)
    return <Card>
      <CardHeader
        avatar={avatar}
        title={title}
        subtitle={subtitle}/>
      <CardActions>
        <IconButton
          icon="refresh"
          text="Обновить"
          onClick={this.props.onUpdate} />
      </CardActions>
    </Card>
  }
}
