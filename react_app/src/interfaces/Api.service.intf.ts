export interface ApiResponseData {
  status?: number,
  message?: string,
  body?: TokenPayload | UserPayload | AccountPayload[]
}

export interface SigniInPayload {
  email: string
  password: string
}

export interface UpdateProfilePayload {
  firstName: string,
  lastName: string,
  token: string
}

export interface UserPayload {
  id: string
  email: string
}

export interface AccountPayload {  
  id: string,
  accountId: string,
  name: string,
  sold: number,
  status: string 
}

export interface TokenPayload {
  token: string
}
