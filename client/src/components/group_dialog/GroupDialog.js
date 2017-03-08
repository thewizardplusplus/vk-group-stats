import React from 'react'
import Dialog from 'material-ui/Dialog'
import IconButton from '../icon_button/IconButton'

export default class GroupDialog extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired,
    onAccept: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired,
  }

  handleAccept = () => {
    this.props.onClose()
    this.props.onAccept()
  }

  render() {
    return <Dialog
      title="Добавить группу"
      open={this.props.open}
      onRequestClose={this.props.onClose}
      actions={[
        <IconButton
          icon="close"
          text="Отмена"
          onClick={this.props.onClose} />,
        <IconButton
          icon="add"
          text="Добавить"
          onClick={this.handleAccept} />,
      ]}>
      {this.props.children}
    </Dialog>
  }
}
