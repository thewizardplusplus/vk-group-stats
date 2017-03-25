import React from 'react'
import {DrivedGroupDialog} from '../../containers/drived_group_dialog/DrivedGroupDialog'
import {DrivedUpdateButton} from '../../containers/drived_update_button/DrivedUpdateButton'

export default class GroupPage extends React.Component {
  static propTypes = {
    content: React.PropTypes.node.isRequired,
  }

  render() {
    return <div>
      {this.props.content}
      <DrivedGroupDialog />
      <DrivedUpdateButton />
    </div>
  }
}
