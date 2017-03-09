import React from 'react'
import {ALL_STATES, FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../../common/states'
import LoadingBlock from '../loading_block/LoadingBlock'
import Loading from '../loading/Loading'
import ErrorBlock from '../error_block/ErrorBlock'
import Error from '../error/Error'

export default class StatefulBlock extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    useAdditionalBlocks: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
  }

  static defaultProps = {
    useAdditionalBlocks: true,
  }

  render() {
    switch (this.props.state) {
    case FETCHING_STATE:
      return this.props.useAdditionalBlocks ? <LoadingBlock /> : <Loading />
    case SUCCESS_STATE:
      return this.props.children
    case FAILURE_STATE:
      return this.props.useAdditionalBlocks ? <ErrorBlock /> : <Error />
    default:
      return null
    }
  }
}
