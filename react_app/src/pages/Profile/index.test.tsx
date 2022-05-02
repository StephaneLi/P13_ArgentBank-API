import React from 'react'
import { render } from '@testing-library/react'
import Profile from '.';
import store from '../../store/stores';
import { Provider } from 'react-redux';

import '../../config/config.jest'

test('renders component simple', () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>
  );
});
