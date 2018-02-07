import React from 'react'
import PropTypes from 'prop-types'

const Logo = props => {
  const {backgroundColor} = props

  return (
    <div style={{backgroundColor}}/>
  )
}

Logo.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}

export default Logo
