import React from 'react'
import PropTypes from 'prop-types'

const Authorized = ({ children, loading }) => {
  if (!loading) {
    return (
      <div id="authorizedUser">
        {children}
      </div>
    )
  }
  return null
}

Authorized.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool.isRequired,
}

export default Authorized
