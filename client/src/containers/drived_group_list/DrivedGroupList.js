import {fetchGroups} from '../../actions/groups'
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
    }
  }
}

export const DrivedGroupList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatefulGroupList)
