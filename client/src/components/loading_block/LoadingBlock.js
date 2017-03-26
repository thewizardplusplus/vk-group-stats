import React from 'react'
import {ALL_BLOCKS_NUMBERS, AdditionalBlock} from '../additional_block/AdditionalBlock'
import Loading from '../loading/Loading'

export default class LoadingBlock extends React.Component {
  static propTypes = {
    blocksNumber: React.PropTypes.oneOf(ALL_BLOCKS_NUMBERS).isRequired,
    hideRootBlock: React.PropTypes.bool.isRequired,
  }

  render() {
    return <AdditionalBlock
      blocksNumber={this.props.blocksNumber}
      hideRootBlock={this.props.hideRootBlock}>
      <Loading />
    </AdditionalBlock>
  }
}
