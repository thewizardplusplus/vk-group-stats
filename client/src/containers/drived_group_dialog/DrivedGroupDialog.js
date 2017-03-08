import {groupDialogClose} from '../../actions/group_dialog'
import {addGroup} from '../../actions/group_add'
import {connect} from 'react-redux'
import GroupDialog from '../../components/group_dialog/GroupDialog'

function mapStateToProps(state) {
  return {
    open: state.groupDialog.open,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClose() {
      dispatch(groupDialogClose())
    },
    onAccept(screenName) {
      dispatch(addGroup(screenName))
    }
  }
}

export const DrivedGroupDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDialog)
