import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import CalendarHeader from './CalendarHeader'
import CalendarRows from './CalendarRows'

class Calendar extends Component {
  static propTypes = {
    disableSend: PropTypes.func,
    handleChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    selectedDate: PropTypes.object,
    selectedTime: PropTypes.object,
    timeSelector: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      date: this.props.selectedDate ? moment(this.props.selectedDate) : moment(),
      month: this.props.selectedDate ? moment(this.props.selectedDate).month() : moment().month(),
      pastError: false,
      year: this.props.selectedDate ? moment(this.props.selectedDate).year() : moment().year(),
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedTime !== prevProps.selectedTime) {
      this.checkIfPast()
    }
  }

  onDayChanged = (date) => {
    if (date != null) {
      this.setState({
        date,
      })

      this.props.handleChange('scheduled', date)
    }
  }

  decrementMonth = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const month = this.state.month
    if (month - 1 < 0) {
      const year = this.state.year
      this.setState({
        month: 11,
        year: year - 1,
      })
    } else {
      this.setState({
        month: month - 1,
      })
    }
  }

  incrementMonth = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const month = this.state.month
    if (month + 1 > 11) {
      const year = this.state.year
      this.setState({
        month: 0,
        year: year + 1,
      })
    } else {
      this.setState({
        month: month + 1,
      })
    }
  }

  monthYear = () => {
    const month = this.state.month
    const year = this.state.year
    return moment([year, month]).format('MMMM YYYY')
  }

  render() {
    return (
      <span>
        <CalendarHeader
          decrementMonth={this.decrementMonth}
          incrementMonth={this.incrementMonth}
          monthYear={this.monthYear()}
        />
        <CalendarRows
          date={this.state.date}
          month={this.state.month}
          onDayChanged={this.onDayChanged}
          year={this.state.year}
        />
      </span>
    )
  }
}

export default Calendar
