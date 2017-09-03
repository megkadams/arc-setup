import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { campaignCreateRequest, getUserRequest, USER_GET_REQUEST } from 'store/actions'
import { AutoReplySettingsForm } from 'components'
import { fromEntities, fromUser, fromStatus } from 'store/selectors'

class AutoReplySettingsFormContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    // request: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    // props.request()
  }

  onSubmit = (data, dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(campaignCreateRequest(data, resolve, reject))
    })
  }

  render() {
    return <AutoReplySettingsForm handleSubmit={this.onSubmit} user={this.props.user} />
  }
}

const mapStateToProps = (state) => ({
  user: fromUser.getUser(state),
  loading: fromStatus.isLoading(state, USER_GET_REQUEST),
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => dispatch(campaignCreateRequest()),
  // request: () => dispatch(getUserRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AutoReplySettingsFormContainer)
