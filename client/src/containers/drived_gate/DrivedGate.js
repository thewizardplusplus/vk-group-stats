import React from 'react'
import {fetchLogin} from '../../actions/login'
import {connect} from 'react-redux'
import StatefulGate from '../../components/stateful_gate/StatefulGate'

function mapStateToProps(state) {
  return {
    state: state.login.state,
    open: state.login.isLogged,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(fetchLogin())
    },
  }
}

export const DrivedGate = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatefulGate)
DrivedGate.propTypes = {
  children: React.PropTypes.node.isRequired,
}
