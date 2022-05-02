import React from 'react'
import { render, screen } from '@testing-library/react'
import Sample from '.'

import '../../config/config.jest'

test('renders component simple', () => {
  render(<Sample />)
  const Element = screen.getByText('Test Component Sample');
  console.log('element :' + Element.innerHTML )
  expect(Element).toBeInTheDocument();
});
