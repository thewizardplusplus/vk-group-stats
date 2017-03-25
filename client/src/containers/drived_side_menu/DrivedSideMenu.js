import {push} from 'react-router-redux'
import {sideMenuClose} from '../../actions/side_menu'
import {connect} from 'react-redux'
import SideMenu from '../../components/side_menu/SideMenu'

function mapStateToProps(state) {
  return {
    open: state.sideMenu.open,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    routeTo(route) {
      dispatch(push(route))
    },
    onClose() {
      dispatch(sideMenuClose())
    },
  }
}

export const DrivedSideMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu)
