import React from 'react'
import { render, screen } from '@testing-library/react'
import Features from '.'

import '../../config/config.jest'

test('renders Features component simple', () => {
  render(<Features />);
  const Element = screen.getByText('Features');
  expect(Element).toBeInTheDocument();
});
