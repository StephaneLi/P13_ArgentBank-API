import { render, screen } from '@testing-library/react'
import Button from '../../components/Button'

import '../../config/config.jest'

test('renders component simple', () => {
  render(<Button />)
  const Element = screen.getByText('label')
  console.log('element :' + Element.innerHTML )
  expect(Element).toBeInTheDocument()
});
