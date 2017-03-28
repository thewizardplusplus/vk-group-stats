import React from 'react'
import {ALL_STATES} from '../../common/states'
import StatefulBlock from '../stateful_block/StatefulBlock'
import {AdditionalBlock} from '../additional_block/AdditionalBlock'
import Profile from '../profile/Profile'

export default class StatefulProfile extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    user: React.PropTypes.shape({
      vk_id: React.PropTypes.number.isRequired,
      photo: React.PropTypes.string,
      name: React.PropTypes.string,
      screen_name: React.PropTypes.string,
    }).isRequired,
    onUpdate: React.PropTypes.func.isRequired,
  }

  render() {
    return <StatefulBlock state={this.props.state}>
      <AdditionalBlock>
        <Profile user={this.props.user} onUpdate={this.props.onUpdate} />
      </AdditionalBlock>
    </StatefulBlock>
  }
}
