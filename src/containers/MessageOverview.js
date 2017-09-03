import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromMessage, fromStatus } from 'store/selectors'
import { clearMessage, messageReadRequest, MESSAGE_READ } from 'store/actions'

import { MessageOverview } from 'components'

class MessageOverviewContainer extends Component {
  static propTypes = {
    clearMessage: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    params: PropTypes.object,
    request: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    props.request(props.params.messageId)
  }

  componentWillUnmount = () => {
    this.props.clearMessage()
  }

  render() {
    const { message, loading } = this.props
    return <MessageOverview {...{ message, loading }} />
  }
}

const mapStateToProps = (state) => ({
  message: fromMessage.getMessage(state),
  loading: fromStatus.isLoading(state, MESSAGE_READ),
})

const mapDispatchToProps = (dispatch) => ({
  clearMessage: () => dispatch(clearMessage()),
  request: (messageId) => dispatch(messageReadRequest(messageId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageOverviewContainer)
