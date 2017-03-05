import React from 'react'
import Loading from '../loading/Loading'
import GroupList from '../group_list/GroupList'
import ErrorBlock from '../error_block/ErrorBlock'

export default class StatefulGroupList extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(['fetching', 'success', 'failure']),
    groups: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      screen_name: React.PropTypes.string.isRequired,
    })).isRequired,
    onMount: React.PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    switch (this.props.state) {
    case 'fetching':
      return <Loading />
    case 'success':
      return <GroupList groups={this.props.groups} />
    case 'failure':
      return <ErrorBlock />
    default:
      return null
    }
  }
}
