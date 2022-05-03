import { render, screen } from '@testing-library/react'
import Hero from '../../components/Hero'

import '../../config/config.jest'

test('renders Hero component simple', () => {
  render(<Hero />)
  const Element = screen.getByText('Promoted Content')
  expect(Element).toBeInTheDocument()
});
