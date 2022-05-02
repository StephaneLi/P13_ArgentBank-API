import React from 'react'
import { render } from '@testing-library/react'
import Profile from '.';

import '../../config/config.jest'

test('renders component simple', () => {
  render(<Profile />);
});
