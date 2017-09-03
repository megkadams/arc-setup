import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { colors } from 'components/variables'

import { Icon } from 'components'

const Paragraph = styled.p`
  color: ${colors.av_grey};
  font-size: 1rem;
  strong {
    font-weight: 500;
  }
  svg {
    margin-top: -1px;
    margin-right: 4px;
    padding: 2px;
  }
`

const formatDate = (status, start) => {
  if (status === 'SCHEDULED') {
    return (
      <span>
        <Icon background="rgb(243, 244, 245)" icon="edit" fill={colors.av_black} size="1rem" /><strong style={{ color: colors.av_black }}> Scheduled</strong> {start}
      </span>
    )
  }

  if (status === 'DRAFT') {
    return (
      <span>
        <Icon background="rgb(243, 244, 245)" icon="edit" fill={colors.av_black} size="1rem" /><strong style={{ color: colors.av_black }}> Last Edited</strong>
      </span>
    )
  }

  if (status === 'SEND') {
    return (
      <span>
        <Icon background="rgba(247, 179, 31, 0.16)" icon="clock" fill={colors.av_brand} size="1rem" /><strong style={{ color: colors.av_brand }}> Message is being processed</strong>
      </span>
    )
  }

  if (moment(new Date()).isSame(moment.unix(start), 'day')) {
    return (
      <span>
        <Icon background="rgba(69, 192, 98, 0.16)" icon="check" fill={colors.av_success} size="1rem" /><strong style={{ color: colors.av_success }}> Delivered Today</strong> {moment.unix(start).format('h:mm a')}
      </span>
    )
  } else if (moment(new Date()).isSame(moment.unix(start), 'year')) {
    return (
      <span>
        <Icon background="rgba(69, 192, 98, 0.16)" icon="check" fill={colors.av_success} size="1rem" /><strong style={{ color: colors.av_success }}> Delivered</strong> {moment.unix(start).format('MMM D')}
      </span>
    )
  }

  return (
    <span>
      <Icon background="rgba(69, 192, 98, 0.16)" icon="check" fill={colors.av_success} size="1rem" /><strong style={{ color: colors.av_success }}> Delivered</strong> {moment.unix(start).format('M/DD/YY')}
    </span>
  )
}

const MessageHeader = ({ start, status }) => {
  return (
    <Paragraph style={{ marginTop: '0px', marginBottom: '1rem' }}>
      {formatDate(status, start)} &middot; 2 Message Types
    </Paragraph>
  )
}

MessageHeader.propTypes = {
  start: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
}

export default MessageHeader
