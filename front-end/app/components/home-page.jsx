'use strict'

import React from 'react'
import Api from '../api'
import ToolBar from './tool-bar.jsx'

class HomePage extends React.Component {
  render() {
    Api.preview().then(res => console.log(res))
    return <ToolBar/>
  }
}

export default HomePage
