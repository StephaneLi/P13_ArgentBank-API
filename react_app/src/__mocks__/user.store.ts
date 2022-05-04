/* eslint-disable import/no-anonymous-default-export */
import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:'user',
  initialState: {
    user: {
      email: 'example@mock.com',
      firstName: 'Firstname',
      lastName: 'Lastname',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      id: '1'
    },
    isAuthenticated: false,
    token: '1234',
    loading: false,
    errorMessage: ''
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false    
    },
  }
})

const mockStore = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

const { login, logout } = userSlice.actions

export type AppDispatch = typeof mockStore.dispatch

export const mockUserActions = {
  login,
  logout
}

export default {
  store: () => mockStore,
  actions: mockUserActions
}
