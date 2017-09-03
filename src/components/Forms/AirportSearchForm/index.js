import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, Field, Statistic } from 'components'

const Form = styled.form`
  width: 100%;
`

const AirportSearchForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="From this airport"
        name="airportFrom"
        onChange={handleChange}
        type="text"
        value={formData.airportFrom}
      />
      <Field
        label="To this airport"
        name="airportTo"
        onChange={handleChange}
        type="text"
        value={formData.airportTo}
      />
      <Statistic
        label="Miles"
        size="large"
        style={{ marginRight: '2rem' }}
        value={'3,187'}
      />
      <Button block type="submit">Save Settings</Button>
    </Form>
  )
}

AirportSearchForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default AirportSearchForm
