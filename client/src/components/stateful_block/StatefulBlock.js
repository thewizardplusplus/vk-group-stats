import React from 'react'
import {ALL_STATES, FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../../common/states'
import LoadingBlock from '../loading_block/LoadingBlock'
import ErrorBlock from '../error_block/ErrorBlock'

export default class StatefulBlock extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    children: React.PropTypes.node.isRequired,
  }

  render() {
    switch (this.props.state) {
    case FETCHING_STATE:
      return <LoadingBlock />
    case SUCCESS_STATE:
      return this.props.children
    case FAILURE_STATE:
      return <ErrorBlock />
    default:
      return null
    }
  }
}
