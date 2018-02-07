'use strict'

import React from 'react'
import Logo from './logo'
import CheckBox from './check-box'

class LoginModal extends React.Component {
  constructor() {
    super()
    this.state = {
      agreement: false
    }
  }

  handleCheck() {
    const {agreement} = this.state

    this.setState({
      agreement: !agreement
    })
  }

  render() {
    return (
      <section>
        <Logo/>
        <CheckBox/>
      </section>
    )
  }
}

export default LoginModal
