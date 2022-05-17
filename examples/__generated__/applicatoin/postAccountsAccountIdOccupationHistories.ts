import type * as Types from './@types';
export type PostAccountsAccountIdOccupationHistoriesUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdOccupationHistoriesResponse = Types.OccupationHistory_v1
export type PostAccountsAccountIdOccupationHistoriesRequestBody = {
  occupationHistories: {
    occupationHistory: {
      occupationId: string
      yearOfExperience: number
    }
  }[]
}
export type PostAccountsAccountIdOccupationHistories = {
  variables: {
    urlParams: PostAccountsAccountIdOccupationHistoriesUrlParams
    requestBody: PostAccountsAccountIdOccupationHistoriesRequestBody
  }
}