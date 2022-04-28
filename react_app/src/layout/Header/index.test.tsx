import React from 'react';
import { render } from '@testing-library/react';
import Header from '.'

import '../../config/config.jest'

test('renders Layout component simple', () => {
  render(<Header />);
});
