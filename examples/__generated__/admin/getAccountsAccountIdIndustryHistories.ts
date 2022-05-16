import type * as Types from './@types';
export type GetAccountsAccountIdIndustryHistoriesUrlParams = {
  account_id: string
} | undefined
export type GetAccountsAccountIdIndustryHistoriesResponse = {
  industry_histories: Types.IndustryHistory[]
}
export type GetAccountsAccountIdIndustryHistories = {
  variables: {
    urlParams: GetAccountsAccountIdIndustryHistoriesUrlParams
  }
}