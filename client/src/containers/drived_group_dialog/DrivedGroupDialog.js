import {groupDialogReject} from '../../actions/group_dialog'
import {connect} from 'react-redux'
import GroupDialog from '../../components/group_dialog/GroupDialog'

function mapStateToProps(state) {
  return {
    open: state.groupDialog.open,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onReject() {
      dispatch(groupDialogReject())
    },
    onAccept() {
      console.log('not yet implemented')
    }
  }
}

export const DrivedGroupDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDialog)
