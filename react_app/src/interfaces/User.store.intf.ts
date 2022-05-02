export interface IErrorSigninMessages {
  [key: string]: string | undefined
}

export interface IUserInfos {
  email?: string,
  firstname?: string,
  lastname?: string,
  createdAt?: Date,
  updatedAt?: Date,
  id?: string
}

export interface IUserInitialState {
  user?: IUserInfos,
  isAuthenticated: boolean,
  token?: string,
  loading?: boolean,
  errorMessage?: string
}