import { createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../services/Api.service'

export const getAccountsUser = createAsyncThunk(
  "accounts/get",
  async (token: string) => {
    const response = await Api.getAccountsUser(token)
    return response;
  }
)