import { render, screen } from '@testing-library/react'
import Button, { ButtonStyle } from '../../components/Button'

import '../../config/config.jest'

describe('When call Component Button with differents styles', () => {
  test('Should render Button component simple', () => {
    render(<Button />)
    const Element = screen.getByTestId('button')
    expect(Element).toBeInTheDocument()
  });
  
  test('Should render Button component cta', () => {
    render(<Button style={ButtonStyle.CTA} />)
    const Element = screen.getByTestId('button')
    expect(Element).toBeInTheDocument()
  });
  
  test('Should render Button component cancel', () => {
    render(<Button style={ButtonStyle.CANCEL} />)
    const Element = screen.getByTestId('button')
    expect(Element).toBeInTheDocument()
  });  
})
