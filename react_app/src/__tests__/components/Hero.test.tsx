import { render, screen } from '@testing-library/react'
import Hero from '../../components/Hero'

import '../../config/config.jest'

test('Should render Hero component simple', () => {
  render(<Hero />)
  const Element = screen.getByTestId('hero')
  expect(Element).toBeInTheDocument()
});
