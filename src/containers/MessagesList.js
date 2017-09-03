import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromEntities, fromMessages, fromStatus } from 'store/selectors'
import { messageListReadRequest, MESSAGE_LIST_READ } from 'store/actions'

import { MessagesList } from 'components'

class MessagesListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    props.request()
  }

  render() {
    const { list, loading } = this.props
    return <MessagesList {...{ list, loading }} />
  }
}

const mapStateToProps = (state) => ({
  list: fromEntities.getList(state, 'messages', fromMessages.getList(state)),
  loading: fromStatus.isLoading(state, MESSAGE_LIST_READ),
})

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(messageListReadRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)
