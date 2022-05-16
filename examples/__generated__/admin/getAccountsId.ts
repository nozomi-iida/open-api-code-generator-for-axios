import type * as Types from './@types';
export type GetAccountsIdUrlParams = {
  id: string
} | undefined
export type GetAccountsIdResponse = Types.Account
export type GetAccountsId = {
  variables: {
    urlParams: GetAccountsIdUrlParams
  }
}