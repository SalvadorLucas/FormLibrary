import React from 'react'
import ReactDOM from 'react-dom'
// Component to be Test
import Number from './number'
// Test Library
import { render, cleanup } from '@testing-library/react'
import '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)
test('Report name', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Number></Number>, div)
})
// Props to send component to be rendered
const props = {
  properyName: 'Value',
}
test('Render correctly', () => {
  const { getByTestId } = render(<Number {...props}></Number>)
  expect(getByTestId('NumberTestId')).toBeInTheDocument()
})
