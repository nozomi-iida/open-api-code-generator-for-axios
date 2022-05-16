import type * as Types from './@types';
export type GetAccountsAccountIdOccupationHistoriesUrlParams = {
  account_id: string
} | undefined
export type GetAccountsAccountIdOccupationHistoriesResponse = {
  occupation_histories: Types.OccupationHistory[]
}
export type GetAccountsAccountIdOccupationHistories = {
  variables: {
    urlParams: GetAccountsAccountIdOccupationHistoriesUrlParams
  }
}