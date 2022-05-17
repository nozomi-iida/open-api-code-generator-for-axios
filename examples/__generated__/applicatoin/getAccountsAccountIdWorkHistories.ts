import type * as Types from './@types';
export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdWorkHistoriesResponse = {
  workHistories: Types.WorkHistory_v1[]
}
export type GetAccountsAccountIdWorkHistories = {
  variables: {
    urlParams: GetAccountsAccountIdWorkHistoriesUrlParams
  }
}