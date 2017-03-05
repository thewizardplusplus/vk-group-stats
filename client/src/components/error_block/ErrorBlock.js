import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import Error from '../error/Error'

export default class ErrorBlock extends React.Component {
  render() {
    return <Card>
      <CardText>
        <Error />
      </CardText>
    </Card>
  }
}
