import {addCounter} from '../../actions/counter_add_async'
import {connect} from 'react-redux'
import UpdateButton from '../../components/update_button/UpdateButton'

function mapStateToProps(state) {
  return {
    groupIds: state.groups.items.map(group => group.data._id),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(groupIds) {
      groupIds.forEach(groupId => dispatch(addCounter(groupId)))
    },
  }
}

export const DrivedUpdateButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateButton)
