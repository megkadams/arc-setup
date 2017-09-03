// STEP4: This project uses a very straight approach of Redux: all components should be as pure (https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc) as possible and should be placed in the components folder.
//
// If, for some reason, you need to connect a component to the store, just create a container with the same name, import the pure component and connect it. Thus having a nice separation of concerns. Do not add any extra styles or another presentational logic on containers. Our containers ONLY handle data now.

// STEP5: These little fromEntities, fromEmployee etc names below are created in the store/selectors file -- from is automatically appended to a camelCased name of the folder (each folder determines a slice of store)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromEntities, fromEmployee, fromStatus } from 'store/selectors'
import { employeeListReadRequest, EMPLOYEE_LIST_READ } from 'store/actions'

// STEP11: Fun fact! Anything inside the components folder can be called this way, doesn't matter if it's an atom/ molecule/page whatever. Gives ability for what is determined an atom vs a molecule to be changed easily (things can be moved around with no problems)
import { EmployeeList } from 'components'

class EmployeeListContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    request: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    // STEP6: Get data! .request is defined below in mapDispatchToProps (ensuring each container has ONLY what it needs and no more). Doing this ensures "Bloated Components and Poor Data Structures Are Easily Spotted -- We all know a function that takes a lot of parameters is a code smell. When...the argument list clearly conveys your component’s dependencies, it’s easy to spot components that need attention. In this case, you can either break up the component or rethink the data structures you’re passing around. Sometimes a long list of props can be easily resolved by passing an object instead. But if the props aren’t logically related enough to justify a single object, then it’s likely time to refactor the component into multiple separate components."
    props.request()
  }

  render() {
    const { list, loading } = this.props
    return <EmployeeList {...{ list, loading }} />
  }
}

// STEP8: These are the bits of state our container needs to know about. 'Status' handles loading states (no more repeating on every page), 'entities' I'm still a bit confused on, but the gist is that it is schema- and selector-driven data handling extracted from specific modules that helps us solve our previous problem of manipulation and where to put modified data. Check out more about schema in the store/entities/schema file. For more info, see this github: https://github.com/diegohaz/redux-modules and the original inspiration for this idea (ducks): https://github.com/erikras/ducks-modular-redux
const mapStateToProps = (state) => ({
  list: fromEntities.getList(state, 'employee', fromEmployee.getList(state)),
  loading: fromStatus.isLoading(state, EMPLOYEE_LIST_READ),
})

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(employeeListReadRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListContainer)
