import React from 'react'
import {DrivedGroupList} from '../../containers/drived_group_list/DrivedGroupList'
import GroupPage from '../group_page/GroupPage'

export default class FullGroupPage extends React.Component {
  render() {
    return <GroupPage content={<DrivedGroupList />} />
  }
}
