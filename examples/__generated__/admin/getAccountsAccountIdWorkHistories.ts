import type * as Types from './@types';
export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  account_id: string
} | undefined
export type GetAccountsAccountIdWorkHistoriesResponse = {
  work_histories: Types.WorkHistory[]
}
export type GetAccountsAccountIdWorkHistories = {
  variables: {
    urlParams: GetAccountsAccountIdWorkHistoriesUrlParams
  }
}