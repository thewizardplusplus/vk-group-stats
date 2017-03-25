import {connect} from 'react-redux'
import AppBar from '../../components/app_bar/AppBar'

function mapStateToProps(state) {
  return {
    isLogged: state.login.isLogged,
  }
}

export const DrivedAppBar = connect(
  mapStateToProps,
)(AppBar)
