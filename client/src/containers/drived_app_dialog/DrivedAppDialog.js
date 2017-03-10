import {appDialogClose} from '../../actions/app_dialog'
import {connect} from 'react-redux'
import AppDialog from '../../components/app_dialog/AppDialog'

function mapStateToProps(state) {
  return {
    open: state.appDialog.open,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClose() {
      dispatch(appDialogClose())
    },
  }
}

export const DrivedAppDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDialog)
