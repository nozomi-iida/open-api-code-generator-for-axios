import type * as Types from './@types';
export type GetAccountsAccountIdOccupationHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdOccupationHistoriesResponse = {
  occupationHistories: Types.OccupationHistory_v1[]
}
export type GetAccountsAccountIdOccupationHistories = {
  variables: {
    urlParams: GetAccountsAccountIdOccupationHistoriesUrlParams
  }
}