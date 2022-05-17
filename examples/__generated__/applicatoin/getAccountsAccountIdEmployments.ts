import type * as Types from './@types';
export type GetAccountsAccountIdEmploymentsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdEmploymentsResponse = {
  employments: Types.Employment_v1
}
export type GetAccountsAccountIdEmployments = {
  variables: {
    urlParams: GetAccountsAccountIdEmploymentsUrlParams
  }
}