import React from 'react'
import {AdditionalBlock} from '../additional_block/AdditionalBlock'
import Profile from '../profile/Profile'

export default class ProfilePage extends React.Component {
  render() {
    return <AdditionalBlock>
      <Profile
        user={{
          vk_id: 13605040,
          photo: 'https://pp.userapi.com/c633923/v633923040/24f9e/SuZfi72zHNY.jpg',
          name: 'Илья Петрович Базанов',
          screen_name: 'thewizardplusplus',
        }}
        onUpdate={() => console.log('Not yet implemented.')} />
    </AdditionalBlock>
  }
}
