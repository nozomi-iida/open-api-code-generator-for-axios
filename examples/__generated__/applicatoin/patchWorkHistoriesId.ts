import type * as Types from './@types';
export type PatchWorkHistoriesIdUrlParams = {
  id: string
} | undefined
export type PatchWorkHistoriesIdResponse = Types.WorkHistory_v1
export type PatchWorkHistoriesIdRequestBody = {
  workHistory: {
    /** 「在職中」「離職中」 */
    isEmployed: boolean
    position: string
    sinceDate: string
    untilDate: string
    name: string
    department: string
  }
}
export type PatchWorkHistoriesId = {
  variables: {
    urlParams: PatchWorkHistoriesIdUrlParams
    requestBody: PatchWorkHistoriesIdRequestBody
  }
}