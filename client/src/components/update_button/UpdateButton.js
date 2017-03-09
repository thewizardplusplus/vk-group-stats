import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Icon from '../icon/Icon'
import './update_button.css'

export default class UpdateButton extends React.Component {
  static propTypes = {
    groupIds: React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired
    ).isRequired,
    onClick: React.PropTypes.func.isRequired,
  }

  render() {
    return <FloatingActionButton
      className="UpdateButton-fab"
      onTouchTap={() => this.props.onClick(this.props.groupIds)}>
      <Icon name="update" />
    </FloatingActionButton>
  }
}
