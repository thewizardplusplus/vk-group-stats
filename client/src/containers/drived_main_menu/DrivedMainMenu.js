import {fetchGroups} from '../../actions/groups'
import {groupDialogOpen} from '../../actions/group_dialog'
import {connect} from 'react-redux'
import MainMenu from '../../components/main_menu/MainMenu'

function mapDispatchToProps(dispatch) {
  return {
    onRefresh() {
      dispatch(fetchGroups())
    },
    onGroupAdd() {
      dispatch(groupDialogOpen())
    },
  }
}

export const DrivedMainMenu = connect(
  null,
  mapDispatchToProps
)(MainMenu)
