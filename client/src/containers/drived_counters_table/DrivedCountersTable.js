import React from 'react'
import {fetchCounters} from '../../actions/counters'
import {connect} from 'react-redux'
import StatefulCountersTable from '../../components/stateful_counters_table/StatefulCountersTable'

function mapStateToProps(state, ownProps) {
  const group = state.groups.items.find(group => {
    return group.data._id === ownProps.groupId
  })
  return {
    state: group.counters.state,
    counters: group.counters.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount(groupId) {
      dispatch(fetchCounters(groupId))
    },
  }
}

export const DrivedCountersTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatefulCountersTable)
DrivedCountersTable.propTypes = {
  groupId: React.PropTypes.string.isRequired,
}
