import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, TextAreaField, Tip } from 'components'

const Form = styled.form`
  width: 100%;
`

const AutoReplySettingsForm = ({ handleSubmit, handleChange, user }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <TextAreaField
        charCount={160}
        name="autoReply"
        label="Auto-Reply"
        rows={7}
        type="text"
      />
      <Tip body="Type &#123;first&#125; to automatically add the recipient&apos;s first name to your message." />
      <Button block type="submit">Save Settings</Button>
    </Form>
  )
}

AutoReplySettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  // handleChange: PropTypes.func.isRequired,
}

export default AutoReplySettingsForm
