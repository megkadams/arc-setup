import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLoginFormUpdate, userLoginRequest } from 'store/actions'
import { fromUser } from 'store/selectors'
import { LoginForm } from 'components'

class LoginFormContainer extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  onChange = (data, dispatch) => {
    // dispatch(userLoginFormUpdate(data))
  }

  onSubmit = (event) => {
    event.preventDefault()
    const serialize = new FormData(event.target)
    const loginData = {
      email: serialize.get('email'),
      password: serialize.get('password'),
    }
    this.props.login(loginData)
  }

  render() {
    return <LoginForm handleChange={this.onChange} handleSubmit={this.onSubmit} />
  }
}

const mapStateToProps = (state) => ({
  user: fromUser.getUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  login: (loginData) => dispatch(userLoginRequest(loginData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
