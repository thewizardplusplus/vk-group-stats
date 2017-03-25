import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Icon from '../icon/Icon'
import Avatar from 'material-ui/Avatar'

export default class AboutPage extends React.Component {
  render() {
    return <Card>
      <CardHeader
        avatar={<Avatar icon={<Icon name="info_outline" />} />}
        title="О сервисе" />
      <CardText>
        <p>
          <strong>VK Group Stats, v1.1.0</strong>
        </p>
        <p>
          Copyright &copy; 2017 thewizardplusplus
        </p>
      </CardText>
    </Card>
  }
}
