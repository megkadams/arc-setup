import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { campaignCreateRequest } from 'store/actions'
import { CampaignForm } from 'components'
// TODO import { createValidator, required } from 'services/validation'

class CampaignFormContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  onSubmit = (data, dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(campaignCreateRequest(data, resolve, reject))
    })
  }

  render() {
    return <CampaignForm handleSubmit={this.onSubmit} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => dispatch(campaignCreateRequest()),
})

export default connect(mapDispatchToProps)(CampaignFormContainer)
