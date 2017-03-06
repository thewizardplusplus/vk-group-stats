import {fetchGroups} from '../../actions/groups'
import {removeGroup} from '../../actions/group_remove'
import {connect} from 'react-redux'
import StatefulGroupList from '../../components/stateful_group_list/StatefulGroupList'

function mapStateToProps(state) {
  return {
    state: state.groups.state,
    groups: state.groups.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(fetchGroups())
    },
    onGroupRemove(group_id) {
      dispatch(removeGroup(group_id))
    },
  }
}

export const DrivedGroupList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatefulGroupList)
