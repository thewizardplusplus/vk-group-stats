import React from 'react'
import Dialog from 'material-ui/Dialog'
import IconButton from '../icon_button/IconButton'

export default class AppDialog extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired,
  }

  render() {
    return <Dialog
      title="О сервисе"
      open={this.props.open}
      onRequestClose={this.props.onClose}
      actions={[
        <IconButton
          icon="done"
          text="OK"
          onClick={this.props.onClose} />,
      ]}>
      <p>
        <strong>VK Group Stats, v1.1.0</strong>
      </p>
      <p>
        Copyright &copy; 2017 thewizardplusplus
      </p>
    </Dialog>
  }
}
