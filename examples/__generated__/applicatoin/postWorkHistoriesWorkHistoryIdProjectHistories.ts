import type * as Types from './@types';
export type PostWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams = {
  workHistoryId: string
} | undefined
export type PostWorkHistoriesWorkHistoryIdProjectHistoriesResponse = Types.ProjectHistory_v1
export type PostWorkHistoriesWorkHistoryIdProjectHistoriesRequestBody =   /** name・positionどちらかは必須 */
{
  projectHistory: {
    name?: string | undefined
    position?: string | undefined
    businessContent?: string | undefined
    sinceDate: string
    untilDate?: string | undefined
    isEmployed: boolean
  }
}
export type PostWorkHistoriesWorkHistoryIdProjectHistories = {
  variables: {
    urlParams: PostWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams
    requestBody: PostWorkHistoriesWorkHistoryIdProjectHistoriesRequestBody
  }
}