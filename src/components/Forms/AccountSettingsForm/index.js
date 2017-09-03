import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, Field } from 'components'

const Form = styled.form`
  width: 100%;
`

const TwoUp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const AccountSettingsForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <TwoUp>
        <Field
          label="First Name"
          name="firstName"
          onChange={handleChange}
          style={{ marginRight: '1rem' }}
          type="text"
          value={formData.firstName}
        />
        <Field
          label="Last Name"
          name="lastName"
          onChange={handleChange}
          type="text"
          value={formData.lastName}
        />
      </TwoUp>
      <Field
        label="Email Address"
        name="email"
        onChange={handleChange}
        type="email"
        value={formData.email}
      />
      <Field
        label="Mobile Phone"
        name="phone"
        onChange={handleChange}
        type="text"
        value={formData.phone}
      />
      <Button block type="submit">Save Settings</Button>
    </Form>
  )
}

AccountSettingsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default AccountSettingsForm
