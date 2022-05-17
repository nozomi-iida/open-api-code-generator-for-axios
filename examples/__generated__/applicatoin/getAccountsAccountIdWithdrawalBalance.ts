import type * as Types from './@types';
export type GetAccountsAccountIdWithdrawalBalanceUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdWithdrawalBalanceResponse = {
  available: {
    amount: number
    currency: string
  }[]
  connectReserved: {
    amount: number
    currency: string
  }[]
  livemode: boolean
  object: string
  pending: {
    amount: number
    currency: string
  }[]
}
export type GetAccountsAccountIdWithdrawalBalance = {
  variables: {
    urlParams: GetAccountsAccountIdWithdrawalBalanceUrlParams
  }
}