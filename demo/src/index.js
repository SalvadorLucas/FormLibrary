import React, { Component } from 'react'
import { render } from 'react-dom'
import Form from './simpleForm'
import App from './App'

class Demo extends Component {
  render() {
    return <div>
      <Form />
      {/* <App/> */}
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
