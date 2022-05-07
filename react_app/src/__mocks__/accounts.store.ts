import { IAccountState } from '../interfaces/Account.store.intf'
import { createSlice } from "@reduxjs/toolkit";

export const mockAccountSlice = createSlice({
  name:'accounts',
  initialState: {
    accounts: [
      {
        id: "1",
        accountId: "x0000",
        name: "Checking",
        sold: 2000.00,
        status: "Test"
      }
    ]
  },
  reducers: {
    initState: (state: IAccountState) => {
      state.accounts = []
      state.loading = false      
      state.errorMessage = undefined      
    },
  }
})

const { initState } = mockAccountSlice.actions

export default mockAccountSlice.reducer

export const mockUserActions = {
  initState,
}

