import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styled from 'styled-components'
import { colors } from 'components/variables'
import moment from 'moment'

import {
  Button,
  Card,
  Heading,
  MessageBubble,
  Paragraph,
  SchedulingFlow,
} from 'components'

import { numberWithCommas } from 'components/utils'

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h4 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const DataGroup = styled.div`
  margin: 2rem 0;
  display: block;
  h6 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-size: 0.875rem;
    a {
      color: ${colors.av_teal};
      font-weight: 500;
      text-decoration: none;
    }
    &:first-of-type {
      margin-top: 0.25rem;
    }
  }
`

const CreateEditMessagePreview = ({ handleSubmit, handleNamedChange, formData }) => {
  return (
    <Form onSubmit={handleSubmit} style={{ margin: '4rem 0' }}>
      <Card width="50%" style={{ marginRight: '1rem' }}>
        <Heading level={4}>Ready to Send</Heading>
        <Paragraph style={{ marginTop: '0.5rem' }}>Review the following before sending your message</Paragraph>
        <DataGroup>
          <Heading level={6}>Message Name</Heading>
          <Paragraph>{formData.name.length ? formData.name : "Uh oh, looks like this message didn't get a name!"}</Paragraph>
        </DataGroup>
        <DataGroup>
          <Heading level={6}>Message Type</Heading>
          <Paragraph>{formData.type.length ? 'Major Promotion, Everyday Savings' : "Uh oh, looks like this message doesn't have any recipients."}</Paragraph>
          <Paragraph><Link to="/">({numberWithCommas(6268)} Recipients)</Link></Paragraph>
        </DataGroup>
        {formData.scheduled === null || formData.scheduled === '' ?
          <span>
            <Button block style={{ marginBottom: '1rem' }} type="submit">Send Now</Button>
            <Button
              block
              outline
              onClick={() => handleNamedChange('scheduled', moment().startOf('day'))}
              type="button"
            >Schedule
          </Button>
          </span>
          :
          <SchedulingFlow
            handleNamedChange={handleNamedChange}
            selectedDate={formData.scheduled}
            selectedTime={formData.scheduledTime}
          />
        }
      </Card>
      <Card width="50%">
        <Heading level={4}>Ready to Send</Heading>
        <Paragraph style={{ marginTop: '0px' }}>Send a test message to (203) 556-8771</Paragraph>
        <MessageBubble>{formData.text}</MessageBubble>
      </Card>
    </Form>
  )
}

CreateEditMessagePreview.propTypes = {
  formData: PropTypes.object.isRequired,
  handleNamedChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default CreateEditMessagePreview
