import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'

const Wrapper = styled.li`
  padding: 1rem;
  background: cream;
  border: 1px solid grey;
  border-radius: 2px;
  margin-bottom: 2rem;
`

const MessagesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
`

const MessageWrapper = styled.div`
  padding: 1rem;
  border: 1px solid gray;
  flex: 1;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`

const Campaign = ({ author, title, type, messages, ...props }) => {
  return (
    <Wrapper {...props}>
      <Heading level={2} style={{ marginTop: '0px' }}>{title}</Heading>
      <Paragraph>Author: {author}</Paragraph>
      <Paragraph>Message type: {type}</Paragraph>
      <MessagesWrapper>
        {messages.map((message) => {
          return (
            <MessageWrapper key={message.id}>
              <Heading level={3} style={{ marginTop: '0px' }}>{message.title}</Heading>
              <Paragraph>{message.body}</Paragraph>
            </MessageWrapper>
          )
        })}
      </MessagesWrapper>
    </Wrapper>
  )
}

Campaign.propTypes = {
  author: PropTypes.string.isRequired,
  messages: PropTypes.array,
  title: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
}

export default Campaign
