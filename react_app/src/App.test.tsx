import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

import './config/config.jest'

test('renders App simple', () => {
  render(<App />);
});
