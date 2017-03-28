import {fetchGroups} from '../../actions/groups'
import {groupDialogOpen} from '../../actions/group_dialog'
import {connect} from 'react-redux'
import MainMenu from '../../components/main_menu/MainMenu'

const groupPages = ['/']
function mapStateToProps(state) {
  return {
    isGroupPage: state.router.location !== null
      && groupPages.indexOf(state.router.location.pathname) !== -1,
  }
}

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
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)
