export interface IErrorMessages {
  [key: string]: string | undefined
}

export interface IUserInfos {
  email?: string,
  firstName?: string,
  lastName?: string,
  createdAt?: Date,
  updatedAt?: Date,
  id?: string
}

export interface IUserState {
  user?: IUserInfos,
  isAuthenticated: boolean,
  token?: string,
  loading?: boolean,
  errorMessage?: string
}