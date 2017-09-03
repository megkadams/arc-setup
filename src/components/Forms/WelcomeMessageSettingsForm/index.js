import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, TextAreaField } from 'components'

const Form = styled.form`
  width: 100%;
`

const WelcomeMessageSettingsForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <TextAreaField
        charCount={160}
        label="Message Text"
        name="welcomeMessage"
        onChange={handleChange}
        rows={7}
        type="text"
        value={formData.welcomeMessage}
      />
      <Button block type="submit">Save Settings</Button>
    </Form>
  )
}

WelcomeMessageSettingsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default WelcomeMessageSettingsForm
