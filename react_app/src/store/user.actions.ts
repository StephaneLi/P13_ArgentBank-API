import { createAsyncThunk } from '@reduxjs/toolkit'
import { SigniInPayload, UpdateProfilePayload } from '../interfaces/Api.service.intf'
import Api from '../services/Api.service';

export const login = createAsyncThunk(
  "auth/login",
  async (payload: SigniInPayload) => {
    const response = await Api.postSignIn(payload)
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

export const updateUserInfos = createAsyncThunk(
  "auth/updateUser",
  async (payload: UpdateProfilePayload) => {
    const response = await Api.putUserInfos(payload)
    return response;
  }
);