import axios from "axios"
import Config from "../config/config"
import MockAccounts from '../__fixtures/accounts_data.mock.json'
import { SigniInPayload, ApiResponseData, UpdateProfilePayload } from "../interfaces/Api.service.intf"

const postSignIn = async (request: SigniInPayload): Promise<ApiResponseData> => {
  return axios.post(`${Config.API_HOST_PATH}/user/login`, request)
    .then(res => {   
      return res.data
    })
    .catch((err) => {
      throw err
    })
};

const getUserInfos = async (token: string): Promise<ApiResponseData> => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return axios.post(`${Config.API_HOST_PATH}/user/profile`)
  .then(res => {   
    return res.data
  })
  .catch((err) => {
    throw err
  })
}

const putUserInfos = async (request: UpdateProfilePayload): Promise<ApiResponseData> => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${request.token}`
  return axios.put(`${Config.API_HOST_PATH}/user/profile`, request)
  .then(res => {   
    return res.data
  })
  .catch((err) => {
    throw err
  })
}

/**
 * TEMP: Mock API Request for display accounts
 * @returns {ApiResponseData} Response
 */
const getAccountsUser = async (token: string): Promise<ApiResponseData> => {
  // Mock Api Request Accounts
  const data = MockAccounts as ApiResponseData
  const delay = 2000

  return new Promise(resolve => setTimeout(resolve, delay, data))
}

const Api = {
  postSignIn,
  getUserInfos,
  putUserInfos,
  getAccountsUser
};

export default Api;