import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { campaignCreateRequest, getUserRequest, USER_GET_REQUEST } from 'store/actions'
import { WelcomeMessageSettingsForm } from 'components'
import { fromEntities, fromUser } from 'store/selectors'

// TODO Match this to account settings, move company to own entity, not nested inside user

class WelcomeMessageSettingsFormContainer extends Component {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      welcomeMessage: 'My message',
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return <WelcomeMessageSettingsForm handleChange={this.onChange} handleSubmit={this.onSubmit} formData={this.state} />
  }
}

const mapStateToProps = (state) => ({
  // formData: fromUser.getFormifiedCompany(state),
  fromData: { welcomeMessage: '' }
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (updatedCompany) => dispatch(campaignCreateRequest(updatedCompany)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessageSettingsFormContainer)
