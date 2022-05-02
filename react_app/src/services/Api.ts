import axios from "axios";

interface ApiResponseData {
  status?: number,
  message?: string,
  body?: ApiBodyData  
}

interface ApiBodyData {
  token?:string
}

export interface SigniInPayload {
  email: string
  password: string
}

export interface UserPayload {
  id: string
  email: string
}


const postSignIn = async (request: SigniInPayload): Promise<ApiResponseData> => {
  return axios.post(`${process.env.REACT_APP_API_HOST}/user/login`, request)
    .then(res => {   
      return res.data
    })
    .catch((err) => {
      throw err
    })
};

const getUserInfos = async (token: string): Promise<UserPayload> => {
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