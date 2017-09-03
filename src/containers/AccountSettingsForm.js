import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveUserRequest } from 'store/actions'
import { AccountSettingsForm } from 'components'
import { fromUser } from 'store/selectors'

class AccountSettingsFormContainer extends Component {
  static propTypes = {
    formData: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      email: props.formData.email || '',
      firstName: props.formData.firstName || '',
      id: props.formData.id || '',
      lastName: props.formData.lastName || '',
      phone: props.formData.phone || '',
      // TODO remove
      company: props.formData.company,
      department: props.formData.department,
      created: props.formData.created,
      hasSignature: props.formData.hasSignature,
      signature: props.formData.signature,
      permissions: props.formData.permissions,
      permissionsMetadata: props.formData.permissionsMetadata,
      superUser: props.formData.superUser,
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
    return <AccountSettingsForm handleChange={this.onChange} handleSubmit={this.onSubmit} formData={this.state} />
  }
}

const mapStateToProps = (state) => ({
  formData: fromUser.getFormifiedUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (updatedUser) => dispatch(saveUserRequest(updatedUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettingsFormContainer)
