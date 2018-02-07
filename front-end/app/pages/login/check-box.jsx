import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {
  const {check} = props
  const backgroundColor = check ? 'black' : 'white'

  return (
    <div style={{backgroundColor}}/>
  )
}

CheckBox.propTypes = {
  check: PropTypes.bool.isRequired
}
