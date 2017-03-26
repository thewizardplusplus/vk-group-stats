import React from 'react'
import {Card, CardText} from 'material-ui/Card'

export const ALL_BLOCKS_NUMBERS = [0, 1, 2]
export class AdditionalBlock extends React.Component {
  static propTypes = {
    blocksNumber: React.PropTypes.oneOf(ALL_BLOCKS_NUMBERS).isRequired,
    hideRootBlock: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
  }
  static defaultProps = {
    blocksNumber: 1,
    hideRootBlock: true,
  }

  wrapToBlock(content, zDepth) {
    return <Card zDepth={zDepth}>
      <CardText>
        {content}
      </CardText>
    </Card>
  }

  render() {
    const rootZDepth = this.props.hideRootBlock ? 0 : undefined;
    switch (this.props.blocksNumber) {
    case 0:
      return this.props.children
    case 1:
      return this.wrapToBlock(this.props.children, rootZDepth)
    case 2:
      return this.wrapToBlock(this.wrapToBlock(this.props.children), rootZDepth)
    default:
      return null
    }
  }
}
