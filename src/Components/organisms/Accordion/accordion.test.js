import React from 'react'
import ReactDOM from 'react-dom'
// Component to be Test
import Accordion from './accordion'
// Test Library
import { render, cleanup } from '@testing-library/react'
import '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)
test('Report name', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Accordion></Accordion>, div)
})
// Props to send component to be rendered
const props = {
  properyName: 'Value',
}
test('Render correctly', () => {
  const { getByTestId } = render(<Accordion {...props}></Accordion>)
  expect(getByTestId('AccordionTestId')).toBeInTheDocument()
})
