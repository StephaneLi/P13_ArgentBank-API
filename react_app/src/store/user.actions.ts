import { createAsyncThunk } from '@reduxjs/toolkit'
import { SigniInPayload } from '../interfaces/Api.service.intf'
import Api from '../services/Api.service';

export const login = createAsyncThunk(
  "auth/login",
  async (payload: SigniInPayload) => {
    const response = await Api.postSignIn({email: payload.email, password: payload.password})
    return response;
  }
);

export const getUserInfos = createAsyncThunk(
  "auth/getUser",
  async (token: string) => {
    const response = await Api.getUserInfos(token)
    return response;
  }
);