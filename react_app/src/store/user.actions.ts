import { createAsyncThunk } from '@reduxjs/toolkit'
import { SigniInPayload, UpdateProfilePayload } from '../interfaces/Api.service.intf'
import Api from '../services/Api.service';
import Config from '../config/config';

export const login = createAsyncThunk(
  "auth/login",
  async (payload: SigniInPayload) => {
    const response = Config.API_MOCK ? await Api.postSignInMock(payload) : await Api.postSignIn(payload)
    return response;
  }
);

export const getUserInfos = createAsyncThunk(
  "auth/getUser",
  async (token: string) => {
    const response = Config.API_MOCK ? await Api.getUserInfosMock(token) : await Api.getUserInfos(token)
    return response;
  }
);

export const updateUserInfos = createAsyncThunk(
  "auth/updateUser",
  async (payload: UpdateProfilePayload) => {
    const response = Config.API_MOCK ? await Api.putUserInfosMock(payload) : await Api.putUserInfos(payload)
    return response;
  }
);