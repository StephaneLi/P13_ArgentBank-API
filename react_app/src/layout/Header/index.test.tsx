import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.'
import { BrowserRouter as Router } from 'react-router-dom'

import '../../config/config.jest'

test('renders Layout Header component simple', () => {
  render(<Router><Header /></Router>);
  const Element = screen.getByText('Sign In');
  expect(Element).toBeInTheDocument();
});
