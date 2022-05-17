import type * as Types from './@types';
export type GetAccountsAccountIdHopeUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdHopeResponse = {
  hopes: Types.Hope_v1[]
}
export type GetAccountsAccountIdHope = {
  variables: {
    urlParams: GetAccountsAccountIdHopeUrlParams
  }
}