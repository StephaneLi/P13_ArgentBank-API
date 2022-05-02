import axios from "axios";
import { SigniInPayload, ApiResponseData } from "../interfaces/Api.service.intf";

const postSignIn = async (request: SigniInPayload): Promise<ApiResponseData> => {
  return axios.post(`${process.env.REACT_APP_API_HOST}/user/login`, request)
    .then(res => {   
      return res.data
    })
    .catch((err) => {
      throw err
    })
};

const getUserInfos = async (token: string): Promise<ApiResponseData> => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return axios.post(`${process.env.REACT_APP_API_HOST}/user/profile`)
  .then(res => {   
    return res.data
  })
  .catch((err) => {
    throw err
  })
}

const Api = {
  postSignIn,
  getUserInfos
};

export default Api;