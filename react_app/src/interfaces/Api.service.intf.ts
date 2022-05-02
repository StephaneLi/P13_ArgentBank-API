export interface ApiResponseData {
  status?: number,
  message?: string,
  body?: TokenPayload | UserPayload  
}


export interface SigniInPayload {
  email: string
  password: string
}

export interface UserPayload {
  id: string
  email: string
}

export interface TokenPayload {
  token: string
}
