import React from 'react'
import { render } from '@testing-library/react'
import Error from '../../pages/Error'

import '../../config/config.jest'

test('renders component simple', () => {
  render(<Error />);
});
