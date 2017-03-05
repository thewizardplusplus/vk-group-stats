import React from 'react'
import Icon from '../icon/Icon'
import muiThemeable from 'material-ui/styles/muiThemeable'

class Error extends React.Component {
  render() {
    const textColor = this.props.muiTheme.palette.accent1Color
    return <div style={{
        color: textColor,
      }}>
      <Icon name="error" color={textColor} /> При обработке запроса произошла
      непредвиденная ошибка.
    </div>
  }
}
export default muiThemeable()(Error)
