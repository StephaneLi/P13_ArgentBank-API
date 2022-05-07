import React from 'react'
import { render, screen } from '../../utils/testRedux'
import Error from '../../pages/Error'

import '../../config/config.jest'

test('renders component Error Page simple', () => {
  render(<Error />);

  const ErrorText = screen.getByTestId('error')
  expect(ErrorText).toBeInTheDocument()
});
