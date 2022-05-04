import { render, screen } from '@testing-library/react'
import Loader from '../../components/Loader'

import '../../config/config.jest'

test('Should render Loader component simple', () => {
  render(<Loader />)
  const Element = screen.getByTestId('loader')
  expect(Element).toBeInTheDocument()
});
