import {groupDialogOpen} from '../../actions/group_dialog'
import {connect} from 'react-redux'
import MainMenu from '../../components/main_menu/MainMenu'

function mapDispatchToProps(dispatch) {
  return {
    onGroupAdd() {
      dispatch(groupDialogOpen())
    },
  }
}

export const DrivedMainMenu = connect(
  null,
  mapDispatchToProps
)(MainMenu)
