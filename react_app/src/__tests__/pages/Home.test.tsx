import React from 'react'
import { render, screen } from '../../utils/testRedux'
import '../../config/config.jest'
import Home from '../../pages/Home'

test('renders component Home Page simple', () => {
  render(<Home />);

  const ComponentElement = screen.getByTestId('features')
  expect(ComponentElement).toBeInTheDocument()
});
