import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../store/stores'
import { Provider } from 'react-redux'
import App from '../App'

import '../config/config.jest'

test('App Component should have header and footer component', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
  const DOMHeader = screen.getByTestId('header')
  const DOMFooter = screen.getByTestId('footer')

  expect(DOMHeader).toBeInTheDocument()
  expect(DOMFooter).toBeInTheDocument()
});
