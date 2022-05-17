import type * as Types from './@types';
export type PostAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdWorkHistoriesResponse = Types.WorkHistory_v1
export type PostAccountsAccountIdWorkHistoriesRequestBody = {
  workHistory: {
    /** 「在職中」「離職中」 */
    isEmployed: boolean
    position: string
    sinceDate: string
    untilDate?: string | undefined
    name: string
    department: string
  }
}
export type PostAccountsAccountIdWorkHistories = {
  variables: {
    urlParams: PostAccountsAccountIdWorkHistoriesUrlParams
    requestBody: PostAccountsAccountIdWorkHistoriesRequestBody
  }
}