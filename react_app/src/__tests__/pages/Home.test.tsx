import React from 'react'
import { render } from '@testing-library/react'
import '../../config/config.jest'
import Home from '../../pages/Home'

test('renders component simple', () => {
  render(<Home />);
});
