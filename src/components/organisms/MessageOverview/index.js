import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'components/variables'

import {
  BreadcrumbNav,
  Button,
  Card,
  Heading,
  Paragraph,
  MessageBubble,
  Statistic,
} from 'components'

const Wrapper = styled.div`
  display: block;
  width: 100%;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h6 {
    font-size: 1rem;
    margin-bottom: 0;
  }
`

const StatisticWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2rem 0;
`

const MessageOverview = ({ message, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {loading && <h6>Loading</h6>}
      <BreadcrumbNav
        back="/dashboard/messages"
        current={message.name}
      />
      <InnerWrapper>
        <Card width="50%" style={{ marginRight: '2rem' }}>
          <Heading level={4}>Delivered</Heading>
          <Paragraph style={{ marginTop: '8px' }}>Delivered on Monday, Apr 25, 2017, 10:08 am EST</Paragraph>
          <Heading level={6}>Message Type</Heading>
          <Paragraph style={{ marginTop: '0px' }}>Major Promotion, Everyday Savings</Paragraph>
          <StatisticWrapper>
            <Statistic
              label="Recipients"
              size="extra-small"
              style={{ marginRight: '0.5rem' }}
              value="6,268"
            />
            <Statistic
              label="Clicks"
              size="extra-small"
              value="2,790"
              style={{ marginRight: '0.5rem' }}
            />
            <Statistic
              label="Click-Through Rate"
              size="extra-small"
              value="21.7%"
            />
          </StatisticWrapper>
          <Button block outline>Download</Button>
        </Card>
        <Card width="50%">
          <Heading level={5}>Message Preview</Heading>
          <MessageBubble>{message.text}</MessageBubble>
        </Card>
      </InnerWrapper>
    </Wrapper>
  )
}

MessageOverview.propTypes = {
  message: PropTypes.object,
  loading: PropTypes.bool,
}

export default MessageOverview
