import type * as Types from './@types';
export type PatchProjectHistoriesIdUrlParams = {
  id: string
} | undefined
export type PatchProjectHistoriesIdResponse = Types.WorkHistory_v1
export type PatchProjectHistoriesIdRequestBody =   /** name・positionどちらかは必須 */
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
export type PatchProjectHistoriesId = {
  variables: {
    urlParams: PatchProjectHistoriesIdUrlParams
    requestBody: PatchProjectHistoriesIdRequestBody
  }
}