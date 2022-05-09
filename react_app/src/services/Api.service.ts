import axios, { AxiosError } from "axios"
import Config from "../config/config"

import MockAccounts from '../__fixtures/accounts_data.mock.json'
import MockProfile from '../__fixtures/profile_data.mock.json' // Only use for static build deployment without API
import MockProfile2 from '../__fixtures/profile_data.mock2.json' // Only use for static build deployment without API
import MockSignin from '../__fixtures/signin_data.mock.json' // Only use for static build deployment without API
import MockUpdateProfile from '../__fixtures/profile_update_data.mock.json' // Only use for static build deployment without API
import MockUsers from '../__fixtures/users_data.mock.json' // Only use for static build deployment without API

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
const getAccountsUserMock = async (token: string): Promise<ApiResponseData> => {
  // Mock Api Request Accounts
  const data = MockAccounts as ApiResponseData
  const delay = 1000

  return new Promise(resolve => setTimeout(resolve, delay, data))
}

/**
 * STATIC BUILD: Mock API Request for signin static deployment
 * @returns {ApiResponseData} Response
 */
const postSignInMock = async (request: SigniInPayload): Promise<ApiResponseData> => {
  let valid = false;
  let data: any = MockSignin
  const error = new AxiosError()
  error.code = "ERR_BAD_REQUEST"  

  MockUsers.forEach((user) => {
    if(user.email === request.email && user.password === request.password) {
      user.email === 'tony@stark.com' ? data.body.token = '1234' : data.body.token = '5678'
      valid = true
      return
    }
  })

  // Mock Api Request  
  const delay = 1000
  console.info('requests "get:/signin" are simulated because the API is not deployed')

  if(!valid) {    
    
    return new Promise(rejected => setTimeout(rejected, delay, data))
      .then(() => {
        throw error
      })
  } else {
    return new Promise(resolve => setTimeout(resolve, delay, data))
  }  
}

/**
 * STATIC BUILD: Mock API Request for get user infos static deployment
 * @returns {ApiResponseData} Response
 */
const getUserInfosMock = async (token: string): Promise<ApiResponseData> => {
  // Mock Api Request
  let data: ApiResponseData
  token === '1234' ? data = MockProfile : data = MockProfile2

  const delay = 1000
  console.info('requests "get:/user" are simulated because the API is not deployed')

  return new Promise(resolve => setTimeout(resolve, delay, data))
}

/**
 * STATIC BUILD: Mock API Request for display accounts static deployment
 * @returns {ApiResponseData} Response
 */
const putUserInfosMock = async (request: UpdateProfilePayload): Promise<ApiResponseData> => {
  // Mock Api Request
  let data: ApiResponseData = MockUpdateProfile
  data.body = request
  const delay = 1000
  console.info('requests "put:/user" are simulated because the API is not deployed')

  return new Promise(resolve => setTimeout(resolve, delay, data))
}

const Api = {
  postSignIn,
  getUserInfos,
  putUserInfos,
  getAccountsUserMock,
  postSignInMock,
  getUserInfosMock,
  putUserInfosMock
};

export default Api;