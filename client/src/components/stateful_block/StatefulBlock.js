import React from 'react'
import {ALL_STATES, FETCHING_STATE, SUCCESS_STATE, FAILURE_STATE} from '../../common/states'
import {ALL_BLOCKS_NUMBERS} from '../additional_block/AdditionalBlock'
import LoadingBlock from '../loading_block/LoadingBlock'
import ErrorBlock from '../error_block/ErrorBlock'

export default class StatefulBlock extends React.Component {
  static propTypes = {
    state: React.PropTypes.oneOf(ALL_STATES).isRequired,
    additionalBlocksNumber: React.PropTypes.oneOf(
      ALL_BLOCKS_NUMBERS
    ).isRequired,
    hideRootAdditionalBlock: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
  }
  static defaultProps = {
    additionalBlocksNumber: 2,
    hideRootAdditionalBlock: true,
  }

  render() {
    switch (this.props.state) {
    case FETCHING_STATE:
      return <LoadingBlock
        blocksNumber={this.props.additionalBlocksNumber}
        hideRootBlock={this.props.hideRootAdditionalBlock} />
    case SUCCESS_STATE:
      return this.props.children
    case FAILURE_STATE:
      return <ErrorBlock
        blocksNumber={this.props.additionalBlocksNumber}
        hideRootBlock={this.props.hideRootAdditionalBlock} />
    default:
      return null
    }
  }
}
