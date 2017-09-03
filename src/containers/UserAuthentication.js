import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getUserRequest, USER_GET } from 'store/actions'
import { fromEntities, fromUser, fromStatus } from 'store/selectors'

export default function requireAuthentication(Component) {
  class UserAuthenticationContainer extends React.Component {
    static propTypes = {
      user: PropTypes.object.isRequired,
      loading: PropTypes.bool,
      request: PropTypes.func.isRequired,
      sendToLogin: PropTypes.func.isRequired,
    }

    constructor(props, context) {
      super(props, context)
      props.request()
    }

    render() {
      return <Component {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      user: fromEntities.getEntity(state, 'user', fromUser.getUser(state)),
      loading: fromStatus.isLoading(state, USER_GET),
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      request: () => dispatch(getUserRequest()),
      sendToLogin: () => dispatch(push('/login')),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(UserAuthenticationContainer)
}
