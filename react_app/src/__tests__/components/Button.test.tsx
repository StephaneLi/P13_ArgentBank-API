import { render, screen } from '@testing-library/react'
import Button, { ButtonStyle } from '../../components/Button'

import '../../config/config.jest'

describe('test component button differents styles', () => {
  test('renders component simple', () => {
    render(<Button />)
    const Element = screen.getByText('label')
    expect(Element).toBeInTheDocument()
  });
  
  test('renders component cta', () => {
    render(<Button style={ButtonStyle.CTA} />)
    const Element = screen.getByText('label')
    expect(Element).toBeInTheDocument()
  });
  
  test('renders component cancel', () => {
    render(<Button style={ButtonStyle.CANCEL} />)
    const Element = screen.getByText('label')
    expect(Element).toBeInTheDocument()
  });  
})
