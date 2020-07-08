import React, { Component } from 'react'
import { render } from 'react-dom'
import Form from './simpleForm'

class Demo extends Component {
  render() {
    return <div>
      <Form />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
