import React from 'react'
import {history} from '../../common/history'
import {ConnectedRouter} from 'react-router-redux'
import FullGroupPage from '../../components/full_group_page/FullGroupPage'
import {Route} from 'react-router'
import ProfilePage from '../../components/profile_page/ProfilePage'
import AboutPage from '../../components/about_page/AboutPage'

export default class Router extends React.Component {
  render() {
    return <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={FullGroupPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </ConnectedRouter>
  }
}
