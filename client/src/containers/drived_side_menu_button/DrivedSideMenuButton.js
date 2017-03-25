import {sideMenuOpen} from '../../actions/side_menu'
import {connect} from 'react-redux'
import SideMenuButton from '../../components/side_menu_button/SideMenuButton'

function mapDispatchToProps(dispatch) {
  return {
    onClick() {
      dispatch(sideMenuOpen())
    },
  }
}

export const DrivedSideMenuButton = connect(
  null,
  mapDispatchToProps
)(SideMenuButton)
