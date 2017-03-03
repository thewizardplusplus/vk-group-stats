import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import './loading.css'

export default class Loading extends React.Component {
  render() {
    return <div className="Loading-container">
      <CircularProgress />
    </div>
  }
}
