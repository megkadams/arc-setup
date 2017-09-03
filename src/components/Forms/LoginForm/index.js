import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, Field } from 'components'

const Form = styled.form`
  width: 100%;
`

const LoginForm = ({ handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="Email Address"
        name="email"
        onChange={handleChange}
        type="text"
      />
      <Field
        label="Password"
        name="password"
        onChange={handleChange}
        type="password"
      />
      <Button block type="submit" style={{ marginTop: '3rem' }}>Sign In</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default LoginForm
