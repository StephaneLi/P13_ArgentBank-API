import React from 'react'
import { render } from '@testing-library/react'
import SignIn from '.'

import '../../config/config.jest'
import { Provider } from 'react-redux';
import store from '../../store/stores';

test('renders component simple', () => {
  render(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
});
