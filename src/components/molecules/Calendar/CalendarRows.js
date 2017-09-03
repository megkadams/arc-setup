import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'
import moment from 'moment'
import { colors } from 'components/variables'

const Table = styled.table`
  width: 100%;
  line-height: 1;
  td {
    text-align: center;
    color: ${colors.av_black};
    font-size: 0.875rem;
    ::-moz-selection { background: transparent; }
    ::selection { background: transparent; }
    span {
      width: 2rem;
      height: 2rem;
      display: block;
      text-align: center;
      display: inline-block;
      padding-top: 9px;
    }
    &.selected {
      span {
        color: white;
        background-color: ${colors.av_teal};
        border-radius: 2px;
        cursor: default;
      }
    }
    &.past {
      color: ${colors.av_silver};
      cursor: default;
    }
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
  thead {
    td {
      font-weight: 500;
    }
  }
`

const TableBody = styled.tbody`
  td {
    cursor: pointer;
    &.empty {
      cursor: default;
    }
  }
`

class CalendarRows extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    month: PropTypes.number.isRequired,
    onDayChanged: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
  }

  render() {
    const { date, month, onDayChanged, year } = this.props

    const cell = (text) => {
      const thisDate = moment([year, month, text])
      const selectedDate = moment(date)
      const classes = cx({
        selected: thisDate.isSame(moment(selectedDate, 'day')),
        empty: text === null,
        past: thisDate.isBefore(moment()) && !thisDate.isSame(moment(), 'day'),
      })
      return (
        <td
          className={classes}
          onClick={thisDate.isBefore(moment()) && !thisDate.isSame(moment(), 'day') ? null : () => onDayChanged(thisDate)}
          role="button"
          value={text}
        ><span>{text}</span>
        </td>
      )
    }

    const row = (values) => {
      return (
        <tr>
          {cell(values[0])}
          {cell(values[1])}
          {cell(values[2])}
          {cell(values[3])}
          {cell(values[4])}
          {cell(values[5])}
          {cell(values[6])}
        </tr>
      )
    }

    const dayRows = (month, year) => {
      const firstDayOfMonth = moment([year, month])
      const startDayOfWeek = firstDayOfMonth.day()
      const daysInMonth = firstDayOfMonth.daysInMonth()
      let dayOfMonth = 1
      const days = []
      const rows = []

      // map the days of the month to the calendar, null if empty
      for (let i = 0; i < 42; i++) {
        if (dayOfMonth === 1 && i !== startDayOfWeek) {
          days[i] = null
        } else if (dayOfMonth > daysInMonth) {
          days[i] = null
        } else {
          days[i] = dayOfMonth ++
        }
      }
      // get the 5 rows
      rows[0] = row(days.slice(0, 7))
      rows[1] = row(days.slice(7, 14))
      rows[2] = row(days.slice(14, 21))
      rows[3] = row(days.slice(21, 28))
      rows[4] = row(days.slice(28, 35))
      rows[5] = row(days.slice(35, 42))

      return (
        <TableBody>
          {rows[0]}
          {rows[1]}
          {rows[2]}
          {rows[3]}
          {rows[4]}
          {rows[5]}
        </TableBody>
      )
    }

    return (
      <Table>
        <thead>
          <tr>
            {cell('SU')}
            {cell('MO')}
            {cell('TU')}
            {cell('WE')}
            {cell('TH')}
            {cell('FR')}
            {cell('SA')}
          </tr>
        </thead>
        {dayRows(month, year)}
      </Table>
    )
  }
}

export default CalendarRows
