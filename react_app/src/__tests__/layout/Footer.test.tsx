import { render, screen } from '../../utils/testRedux'
import Footer from '../../layout/Footer'

import '../../config/config.jest'

test('Should render Layout Footer component simple', () => {
  render(<Footer />)
  const Element = screen.getByTestId('footer')
  expect(Element).toBeInTheDocument()
});
