import { createSlice } from "@reduxjs/toolkit";

export const mockUserSlice = createSlice({
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

const { login, logout } = mockUserSlice.actions

export default mockUserSlice.reducer

export const mockUserActions = {
  login,
  logout
}


