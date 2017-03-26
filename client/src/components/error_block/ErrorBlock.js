import React from 'react'
import {ALL_BLOCKS_NUMBERS, AdditionalBlock} from '../additional_block/AdditionalBlock'
import Error from '../error/Error'

export default class ErrorBlock extends React.Component {
  static propTypes = {
    blocksNumber: React.PropTypes.oneOf(ALL_BLOCKS_NUMBERS).isRequired,
    hideRootBlock: React.PropTypes.bool.isRequired,
  }

  render() {
    return <AdditionalBlock
      blocksNumber={this.props.blocksNumber}
      hideRootBlock={this.props.hideRootBlock}>
      <Error />
    </AdditionalBlock>
  }
}
