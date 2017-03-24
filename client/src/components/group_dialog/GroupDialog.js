import React from 'react'
import Dialog from 'material-ui/Dialog'
import IconButton from '../icon_button/IconButton'
import TextField from 'material-ui/TextField'
import Icon from '../icon/Icon'
import IconicButton from 'material-ui/IconButton'
import './group_dialog.css'

export default class GroupDialog extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    onClose: React.PropTypes.func.isRequired,
    onAccept: React.PropTypes.func.isRequired,
  }

  state = {
    screenName: '',
  }

  handleScreenNameChange = (event, newValue) => {
    this.setState({
      screenName: newValue,
    })
  }

  handleScreenNameReset = () => {
    this.setState({
      screenName: '',
    })
  }

  handleClose = () => {
    this.handleScreenNameReset()
    this.props.onClose()
  }

  handleAccept = () => {
    const screenName = this.state.screenName
    this.handleClose()

    if (screenName.length > 0) {
      this.props.onAccept(screenName)
    }
  }

  render() {
    return <Dialog
      title="Добавить группу"
      open={this.props.open}
      onRequestClose={this.handleClose}
      actions={[
        <IconButton
          icon="close"
          text="Отмена"
          onClick={this.handleClose} />,
        <IconButton
          icon="add"
          text="Добавить"
          onClick={this.handleAccept} />,
      ]}>
      <TextField
        className="GroupDialog-text-field"
        floatingLabelText="Адрес"
        floatingLabelFixed={true}
        hintText="Например, https://vk.com/team или просто team"
        value={this.state.screenName}
        fullWidth={true}
        onChange={this.handleScreenNameChange} />
      <IconicButton onTouchTap={this.handleScreenNameReset}>
        <Icon name="close" />
      </IconicButton>
    </Dialog>
  }
}
