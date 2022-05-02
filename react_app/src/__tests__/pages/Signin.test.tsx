import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/stores'
import SignIn from '../../pages/SignIn'
import '../../config/config.jest'

test('renders component simple', () => {
  render(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
});
