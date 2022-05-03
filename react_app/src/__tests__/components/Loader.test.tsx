import { render, screen } from '@testing-library/react'
import Loader from '../../components/Loader'

import '../../config/config.jest'

test('renders component simple', () => {
  render(<Loader />)
  const Element = screen.getByText('Loading')
  expect(Element).toBeInTheDocument()
});
