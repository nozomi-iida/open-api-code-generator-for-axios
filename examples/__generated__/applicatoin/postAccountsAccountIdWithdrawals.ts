import type * as Types from './@types';
export type PostAccountsAccountIdWithdrawalsUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdWithdrawalsResponse = Types.AccountWithdrawal_v1
export type PostAccountsAccountIdWithdrawalsRequestBody = {
  withdrawal: {
    amount: number
  }
}
export type PostAccountsAccountIdWithdrawals = {
  variables: {
    urlParams: PostAccountsAccountIdWithdrawalsUrlParams
    requestBody: PostAccountsAccountIdWithdrawalsRequestBody
  }
}