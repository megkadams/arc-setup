import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

import { Button, Calendar, Paragraph, TimePicker } from 'components'
import { colors } from 'components/variables'

const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding: 2rem;
  border: 1px solid ${colors.av_silver};
  hr {
    display: block;
    width: calc(100% + 4rem);
    margin-left: -2rem;
    background: ${colors.av_silver};
    color: ${colors.av_silver};
    border: none;
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

// checkIfPast = () => {
//   const hour = moment(this.props.selectedTime).get('hour')
//   const minute = moment(this.props.selectedTime).get('minute')
//   const fullDateTime = moment(this.props.selectedDate).set('hour', hour).set('minute', minute)
//
//   if (fullDateTime < moment()) {
//     this.setState({
//       pastError: true,
//     }, this.props.disableSend(true))
//   } else {
//     this.setState({
//       pastError: false,
//     }, this.props.disableSend(false))
//   }
// }

const SchedulingFlow = ({ handleNamedChange, selectedDate, selectedTime }) => {
  return (
    <Wrapper>
      <Calendar
        handleChange={handleNamedChange}
        name="scheduled"
        selectedDate={selectedDate}
        timeSelector
      />
      <TimePicker
        name="scheduledTime"
        // pastError={this.state.pastError}
        selectedTime={selectedTime || null}
        handleChange={handleNamedChange}
      />
      <hr />
      <Paragraph style={{ marginTop: '0px', marginBottom: '2rem' }}>Message will be scheduled to be delivered <strong>{moment(selectedDate).format('ddd, MMM D, YYYY')}</strong> at <strong>{selectedTime && selectedTime.toString().length > 0 ? moment(selectedTime * 1000).format('h:mm a') : '12:00 pm EDT'}</strong></Paragraph>
      <Button block style={{ marginBottom: '1rem' }} type="submit">Schedule Message</Button>
      <Button
        block
        outline
        onClick={() => { handleNamedChange(null, { scheduled: null, scheduledTime: null }) }}
        type="button"
      >Cancel
      </Button>
    </Wrapper>
  )
}

SchedulingFlow.propTypes = {
  handleNamedChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.object,
  selectedTime: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default SchedulingFlow
