import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.'
import { BrowserRouter as Router } from 'react-router-dom'

import '../../config/config.jest'
import { Provider } from 'react-redux';
import store from '../../store/stores';

test('renders Layout Header component simple', () => {
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  const Element = screen.getByText('Sign In');
  expect(Element).toBeInTheDocument();
});
