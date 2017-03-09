import React from 'react'
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table'
import Icon from '../icon/Icon'
import moment from 'moment'
import './counters_table.css'

export default class CountersTable extends React.Component {
  static propTypes = {
    counters: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      timestamp: React.PropTypes.string.isRequired,
      value: React.PropTypes.number.isRequired,
      delta: React.PropTypes.number,
    })).isRequired,
  }

  selectDeltaViewProperty(delta, values) {
    if (typeof delta === 'undefined') {
      return null
    }

    return (delta < 0 ? values[0] : (delta === 0 ? values[1] : values[2]))
  }

  render() {
    moment.locale('ru')

    return <Table selectable={false}>
      <TableBody displayRowCheckbox={false}>
        {this.props.counters.map(counter => {
          return <TableRow key={counter._id}>
            <TableRowColumn>
              {/* event icon hasn't gaps, because a middle space is required */}
              <Icon name="event" /> {moment(counter.timestamp).fromNow()}
            </TableRowColumn>
            <TableRowColumn>
              {/* people icon hasn't gaps, because a middle space is required
                */}
              <Icon name="people" /> {counter.value}
            </TableRowColumn>
            <TableRowColumn className={this.selectDeltaViewProperty(
              counter.delta,
              ['CountersTable-loss', null, 'CountersTable-gain']
            )}>
              {typeof counter.delta === 'undefined' ? null : <span>
                {/* expand icons have gaps, because a middle space isn't required
                  */}
                <Icon name={this.selectDeltaViewProperty(
                  counter.delta,
                  ['expand_more', 'chevron_right', 'expand_less']
                )} />
                {this.selectDeltaViewProperty(
                  counter.delta,
                  ['-', '', '+']
                ) + Math.abs(counter.delta)}
              </span>}
            </TableRowColumn>
          </TableRow>
        })}
      </TableBody>
    </Table>
  }
}
