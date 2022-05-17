import type * as Types from './@types';
export type GetAccountsAccountIdIncomeHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdIncomeHistoriesResponse = {
  incomeHistories: Types.AccountIncomeHistory_v1[]
  totalDataNums: number
}
export type GetAccountsAccountIdIncomeHistories = {
  variables: {
    urlParams: GetAccountsAccountIdIncomeHistoriesUrlParams
  }
}