import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Heading, Paragraph } from 'components'

const ConfirmationCard = ({ message }) => {
  return (
    <Card width="444px" style={{ margin: '4rem auto 0', textAlign: 'center' }}>
      <Heading level={5}>Message Sent</Heading>
      <Paragraph style={{ marginBottom: '2rem' }}>Your message has been successfully sent to {message.recipients} recipients.</Paragraph>
      <Button block to="/dashboard/messages">Back to Messages</Button>
    </Card>
  )
}

ConfirmationCard.propTypes = {
  message: PropTypes.object.isRequired,
}

export default ConfirmationCard
