import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { messageReadRequest, MESSAGE_READ } from 'store/actions'
import { fromMessage, fromStatus } from 'store/selectors'
import { DataCard } from 'components'

class DashboardContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    // if (this.props.params.messageId && this.props.params.messageId.length) {
    //   this.props.request(this.props.params.messageId)
    // }
    this.props.request('340')
  }

  render() {
    const { loading } = this.props

    if (loading) {
      return <div>TODO</div>
    }

    return (
      <span style={{ display: 'block', margin: '4rem auto' }}>
        <DataCard style={{ marginBottom: '2rem' }}{...this.props} />
        <DataCard {...this.props} />
      </span>
    )
  }
}

const mapStateToProps = (state) => ({
  message: fromMessage.getMessage(state),
  loading: fromStatus.isLoading(state, MESSAGE_READ),
})

const mapDispatchToProps = (dispatch) => ({
  request: (messageId) => dispatch(messageReadRequest(messageId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
