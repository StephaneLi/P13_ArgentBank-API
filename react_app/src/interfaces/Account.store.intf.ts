export interface IErrorMessages {
  [key: string]: string | undefined
}

export interface IAccount {
  accountId?: string,
  name?: string,
  sold?: number,
  status?: string,
  id?: string
}

export interface IAccountState {
  accounts: IAccount[],
  loading?: boolean,
  errorMessage?: string
}
