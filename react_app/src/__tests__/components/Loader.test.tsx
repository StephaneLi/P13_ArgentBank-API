import { render, screen } from '../../utils/testRedux'
import Loader from '../../components/Loader'

import '../../config/config.jest'

test('Should render Loader component simple', () => {
  render(<Loader />)
  const Element = screen.getByTestId('loader')
  expect(Element).toBeInTheDocument()
});
