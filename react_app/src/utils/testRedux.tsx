import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import mockUserSlice from '../__mocks__/user.store';
import mockAccountSlice from '../__mocks__/accounts.store';

function render(
  ui: any,
  {
    preloadedState,
    store = configureStore({reducer: { user: mockUserSlice, account: mockAccountSlice }, preloadedState }),
    ...renderOptions
  }:any = {}
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }