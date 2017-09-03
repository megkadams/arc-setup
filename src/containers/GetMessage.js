import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { messageReadRequest, MESSAGE_READ } from 'store/actions'
import { CreateEditMessageForm } from 'containers'
import { fromMessage, fromStatus } from 'store/selectors'

class GetMessageContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    params: PropTypes.object,
    request: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    toRender: PropTypes.any,
  }

  constructor(props, context) {
    super(props, context)
    if (this.props.params.messageId && this.props.params.messageId.length) {
      this.props.request(this.props.params.messageId)
    }
  }

  render() {
    const { loading, toRender } = this.props
    const ToRender = toRender

    if (loading) {
      return <div>TODO</div>
    }

    return (
      <ToRender {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  formData: fromMessage.getFormifiedMessage(state),
  message: fromMessage.getMessage(state),
  loading: fromStatus.isLoading(state, MESSAGE_READ),
})

const mapDispatchToProps = (dispatch) => ({
  request: (messageId) => dispatch(messageReadRequest(messageId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GetMessageContainer)
