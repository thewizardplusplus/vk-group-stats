import React from 'react'
import Dialog from 'material-ui/Dialog'
import IconButton from '../icon_button/IconButton'

export default class GroupDialog extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onReject: React.PropTypes.func.isRequired,
    onAccept: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return <Dialog
      title="Добавить группу"
      open={this.props.open}
      onRequestClose={this.props.onReject}
      actions={[
        <IconButton
          icon="close"
          text="Отмена"
          onClick={this.props.onReject} />,
        <IconButton
          icon="add"
          text="Добавить"
          onClick={this.props.onAccept} />,
      ]}>
      {this.props.children}
    </Dialog>
  }
}
