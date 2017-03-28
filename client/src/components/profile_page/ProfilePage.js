import React from 'react'
import StatefulProfile from '../stateful_profile/StatefulProfile'

export default class ProfilePage extends React.Component {
  render() {
    return <StatefulProfile
      state="success"
      user={{
        vk_id: 13605040,
        photo: 'https://pp.userapi.com/c633923/v633923040/24f9e/SuZfi72zHNY.jpg',
        name: 'Илья Петрович Базанов',
        screen_name: 'thewizardplusplus',
      }}
      onUpdate={() => console.log('Not yet implemented.')} />
  }
}
