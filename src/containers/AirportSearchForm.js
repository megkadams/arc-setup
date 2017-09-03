import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { calculateAirportDistance } from 'store/actions'
import { AirportSearchForm } from 'components'

class AirportSearchFormContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      airportFrom: '',
      airportTo: '',
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
    return <AirportSearchForm handleChange={this.onChange} handleSubmit={this.onSubmit} formData={this.state} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (airports) => dispatch(calculateAirportDistance(airports)),
})

export default connect(null, mapDispatchToProps)(AirportSearchFormContainer)
