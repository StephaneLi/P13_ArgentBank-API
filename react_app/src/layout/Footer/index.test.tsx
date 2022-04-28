import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.'

import '../../config/config.jest'

test('renders Layout component simple', () => {
  render(<Footer />);
});
