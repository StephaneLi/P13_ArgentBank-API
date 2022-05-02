import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/stores'
import { Provider } from 'react-redux'

import './config/config.jest'

test('renders App simple', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>);
});
