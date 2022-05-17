import type * as Types from './@types';
export type GetAccountsAccountIdWithdrawalsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdWithdrawalsResponse = {
  withdrawals: Types.AccountWithdrawal_v1
}
export type GetAccountsAccountIdWithdrawals = {
  variables: {
    urlParams: GetAccountsAccountIdWithdrawalsUrlParams
  }
}