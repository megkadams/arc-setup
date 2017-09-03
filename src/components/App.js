import React from 'react'
import PropTypes from 'prop-types'

const App = ({ children }) => {
  return (
    <div id="appRender">
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
