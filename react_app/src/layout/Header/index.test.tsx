import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.'

import '../../config/config.jest'

test('renders Layout Header component simple', () => {
  render(<Header />);
  const Element = screen.getByText('Sign In');
  expect(Element).toBeInTheDocument();
});
