import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import Loading from '../loading/Loading'

export default class LoadingBlock extends React.Component {
  render() {
    return <Card>
      <CardText>
        <Loading />
      </CardText>
    </Card>
  }
}
