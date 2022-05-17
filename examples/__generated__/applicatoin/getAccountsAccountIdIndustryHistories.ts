import type * as Types from './@types';
export type GetAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdIndustryHistoriesResponse = {
  industryHistories: Types.IndustryHistory_v1[]
}
export type GetAccountsAccountIdIndustryHistories = {
  variables: {
    urlParams: GetAccountsAccountIdIndustryHistoriesUrlParams
  }
}