import { render, screen } from '../../utils/testRedux'
import Button, { ButtonStyle } from '../../components/Button'

import '../../config/config.jest'

describe('When call Component Button with differents styles', () => {
  test('Should render Button component simple', () => {
    render(<Button />)
    const Element = screen.getByTestId('label')
    expect(Element).toBeInTheDocument()
  });
  
  test('Should render Button component cta', () => {
    render(<Button style={ButtonStyle.CTA} />)
    const Element = screen.getByTestId('label')
    expect(Element).toBeInTheDocument()
  });
  
  test('Should render Button component cancel', () => {
    render(<Button style={ButtonStyle.CANCEL} />)
    const Element = screen.getByTestId('label')
    expect(Element).toBeInTheDocument()
  });  

  test('Should render Button loaded', () => {
    render(<Button isLoading={true} />)
    const Element = screen.getByTestId('label')
    expect(Element).toBeInTheDocument()
  });  
})
