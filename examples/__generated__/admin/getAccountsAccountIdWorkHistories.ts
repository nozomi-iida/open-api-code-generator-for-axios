import type * as Types from './@types';
export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
  workHistoriesId: string
} | undefined
export type GetAccountsAccountIdWorkHistoriesResponse = {
  workHistories: Types.WorkHistory[]
}
export type GetAccountsAccountIdWorkHistories = {
  variables: {
    urlParams: GetAccountsAccountIdWorkHistoriesUrlParams
  }
}