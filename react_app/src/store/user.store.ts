import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { TokenPayload, UserPayload, UpdateProfilePayload } from '../interfaces/Api.service.intf'
import { login, getUserInfos, updateUserInfos } from './user.actions'
import { IErrorMessages, IUserState } from './../interfaces/User.store.intf'

const ErrorSigninMessages: IErrorMessages = {
  ERR_BAD_REQUEST: "You don't have a user account or you have bad password",
  ERR_NETWORK: "An error occurred on the server, please contact the administrator"
}

const userInitialState: IUserState = {
  token: undefined,
  isAuthenticated: false
}

// Slice
const userSlice:Slice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    logout: (state: IUserState) => {
      state.user = {}
      state.isAuthenticated = false
      state.token = undefined
      state.loading = false      
      state.errorMessage = undefined      
    },
    setToken: (state: IUserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    deleteToken: (state: IUserState) =>  {
      state.token = undefined;
    },
    initErrorMessage: (state: IUserState) => {
      state.errorMessage = undefined
    },
  },
  extraReducers: (builder) => {
    // Login authentication
    builder.addCase( login.pending, (state) => {
      state.loading = true;
    })
    builder.addCase( login.fulfilled, (state, action) => {
      const payload =  action.payload.body as TokenPayload

      state.loading = false;
      state.token = payload.token
      state.errorMessage = undefined
    })
    builder.addCase( login.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.code ? ErrorSigninMessages[action.error.code] : undefined
    })

    // GetUserInfos
    builder.addCase( getUserInfos.pending, (state) => {
      state.loading = true;
    })
    builder.addCase( getUserInfos.fulfilled, (state, action) => {
      const payload = action.payload.body as UserPayload
      state.loading = false;
      state.user = payload
      state.isAuthenticated = true
      state.errorMessage = undefined
    })
    builder.addCase( getUserInfos.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.code ? ErrorSigninMessages[action.error.code] : undefined
    })

    // PutUserInfos
    builder.addCase( updateUserInfos.pending, (state) => {
      state.loading = true;
    })
    builder.addCase( updateUserInfos.fulfilled, (state, action) => {
      const payload = action.payload.body as UpdateProfilePayload
      state.loading = false;
      state.user!.firstName = payload.firstName
      state.user!.lastName = payload.lastName
      state.errorMessage = undefined
    })
    builder.addCase( updateUserInfos.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.code ? ErrorSigninMessages[action.error.code] : undefined
    })
  },
});

const { setToken, deleteToken, initErrorMessage, logout } = userSlice.actions

export const UserActions = {
  setToken,
  deleteToken,
  initErrorMessage,
  login,
  logout,
  getUserInfos,
  updateUserInfos
}

export default userSlice

