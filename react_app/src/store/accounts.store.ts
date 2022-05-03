import { Slice, createSlice } from '@reduxjs/toolkit'
import { IErrorMessages, IAccountState } from '../interfaces/Account.store.intf'
import { getAccountsUser } from './account.actions'


const ErrorSigninMessages: IErrorMessages = {
  ERR_NETWORK: "An error occurred on the server, please contact the administrator"
}

const userInitialState: IAccountState = {
  accounts: []
}

const accountSlice:Slice = createSlice({
  name: 'accounts',
  initialState: userInitialState,
  reducers: {
    initState: (state: IAccountState) => {
      state.accounts = []
      state.loading = false      
      state.errorMessage = undefined      
    },
  },
  extraReducers: (builder) => {
    // GetAccounts
    builder.addCase( getAccountsUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase( getAccountsUser.fulfilled, (state, action) => {
      const payload = action.payload.body as any
      state.accounts = payload
      state.loading = false;
      state.errorMessage = undefined
    })
    builder.addCase( getAccountsUser.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.code ? ErrorSigninMessages[action.error.code] : undefined
    })
    
  },
});

const { initState } = accountSlice.actions

export const AccountsActions = {
  initState,
  getAccountsUser
}

export default accountSlice