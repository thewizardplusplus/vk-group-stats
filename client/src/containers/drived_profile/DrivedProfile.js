import {updateUser} from '../../actions/user_update'
import {connect} from 'react-redux'
import StatefulProfile from '../../components/stateful_profile/StatefulProfile'

function mapStateToProps(state) {
  return {
    state: state.login.user.state,
    user: state.login.user.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdate() {
      dispatch(updateUser())
    },
  }
}

export const DrivedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatefulProfile)
