import { render, screen } from '@testing-library/react'
import Features from '../../components/Features'

import '../../config/config.jest'

test('Should render Features component simple', () => {
  render(<Features />)
  const Element = screen.getByTestId('features')
  expect(Element).toBeInTheDocument()
});
