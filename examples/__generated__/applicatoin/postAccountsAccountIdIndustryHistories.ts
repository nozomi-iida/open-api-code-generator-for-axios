import type * as Types from './@types';
export type PostAccountsAccountIdIndustryHistoriesUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdIndustryHistoriesResponse = Types.IndustryHistory_v1
export type PostAccountsAccountIdIndustryHistoriesRequestBody = {
  industryHistories: {
    industryHistory: {
      industryId: string
      yearOfExperience: number
    }
  }[]
}
export type PostAccountsAccountIdIndustryHistories = {
  variables: {
    urlParams: PostAccountsAccountIdIndustryHistoriesUrlParams
    requestBody: PostAccountsAccountIdIndustryHistoriesRequestBody
  }
}