import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store/stores'
import Header from '../../layout/Header'

import '../../config/config.jest'


test('renders Layout Header component simple', () => {
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  const Element = screen.getByText('Sign In')
  expect(Element).toBeInTheDocument()
});
