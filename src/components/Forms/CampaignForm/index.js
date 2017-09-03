import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Heading, Field } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  background: papayawhip;
  margin-bottom: 2rem;
`

class CampaignForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Heading level={2} style={{ marginTop: '0px', marginBottom: '1rem' }}>Create a campaign</Heading>
        <Field name="campaignTitle" label="Campaign Title" type="text" />
        <Field name="author" label="Author" type="text" />
        <button type="submit">Create</button>
      </Form>
    )
  }
}

export default CampaignForm
