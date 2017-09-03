import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearMessage, saveMessageRequest, messageCategoryCountRequest, messageCategoriesReadRequest, MESSAGE_CATEGORIES_READ } from 'store/actions'
import { CreateEditMessageHeader, CreateEditMessageForm, CreateEditMessagePreview } from 'components'
import { fromEntities, fromMessage, fromMessageCategories, fromStatus } from 'store/selectors'
import moment from 'moment'

class CreateEditMessageFormContainer extends Component {
  static propTypes = {
    clearMessage: PropTypes.func.isRequired,
    formData: PropTypes.object,
    getSubCount: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    params: PropTypes.object,
    request: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    props.request()

    this.state = {
      categories: [],
      delivery: props.formData.delivery || '',
      id: props.formData.id || '',
      name: props.formData.name || '',
      recipients: props.formData.recipients || '',
      start: props.formData.start || '',
      status: props.formData.status || '',
      subscribers: props.formData.subscribers || 0,
      text: props.formData.text || '',
      updated: props.formData.updated || '',
      // TODO remove
      response: props.formData.response || '',
      scheduled: props.formData.scheduled || '',
      scheduledTime: props.formData.scheduledTime || 0,
      targeting: props.formData.targeting || '',
      unreadReplies: props.formData.unreadReplies || '',
      user: props.formData.user || '',
    }
  }

  // componentWillUnmount = () => {
  //   console.log('unmounting');
  //   // TODO fix so that clears when leaving this flow, but not when going from edit to preview to confirm.
  //   this.props.clearMessage()
  // }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const submitData = {
      name: this.state.name,
      text: this.state.text,
      start: parseInt(moment().format('X'), 10),
      status: 'SEND',
      targeting: {
        type: 'INDIVIDUAL',
        individuals: [5881],
      },
    }
    this.props.onSubmit(submitData)
  }

  onNamedChange = (name, value) => {
    if (value !== null && typeof value === 'object') {
      this.setState(value)
    }

    this.setState({
      [name]: value,
    })
  }

  onCategoryChange = (event) => {
    const { categories } = this.state
    const catId = event.target.value

    if (categories.includes(catId)) {
      const i = categories.findIndex(cat => cat.id === catId)
      const newCats = categories.slice()
      newCats.splice(i, 1)
      this.setState({
        categories: newCats,
      })
      this.props.getSubCount(newCats)
    } else {
      const newCats = categories.slice()
      newCats.push(catId)
      this.setState({
        categories: newCats,
      })
      this.props.getSubCount(newCats)
    }
  }

  render() {
    const { list, loading, params, route } = this.props

    if (loading) {
      return <h3>Loading...</h3>
    }

    return (
      <div>
        <CreateEditMessageHeader params={params} route={route} />

        {route.path === 'new' || route.path === 'edit/:messageId' ?
          <CreateEditMessageForm
            formData={this.state}
            messageCategories={list}
            handleCategoryChange={this.onCategoryChange}
            handleChange={this.onChange}
            params={params}
          />
          :
          <CreateEditMessagePreview
            formData={this.state}
            handleNamedChange={this.onNamedChange}
            handleSubmit={this.onSubmit}
            params={params}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  formData: fromMessage.getFormifiedMessage(state),
  loading: fromStatus.isLoading(state, MESSAGE_CATEGORIES_READ),
  list: fromEntities.getList(state, 'messageCategories', fromMessageCategories.getList(state)),
  subscriberCount: fromMessageCategories.getCount(state),
})

const mapDispatchToProps = (dispatch) => ({
  clearMessage: () => dispatch(clearMessage()),
  getSubCount: (categories) => dispatch(messageCategoryCountRequest(categories)),
  onSubmit: (updatedMessage) => dispatch(saveMessageRequest(updatedMessage)),
  request: () => dispatch(messageCategoriesReadRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditMessageFormContainer)
