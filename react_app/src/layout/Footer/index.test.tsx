import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.'

import '../../config/config.jest'

test('renders Layout Footer component simple', () => {
  render(<Footer />);
  const Element = screen.getByText('Copyright 2020 Argent Bank');
  expect(Element).toBeInTheDocument();
});
