import type * as Types from './@types';
export type PatchJobOrdersIdUrlParams = {
  id: string
} | undefined
export type PatchJobOrdersIdResponse = Types.JobOrder
export type PatchJobOrdersIdRequestBody = {
  jobOrder: {
    status: 'certificated' | 'rejected'
    /** rejectedの場合、必須 */
    reviewComment: string
  }
}
export type PatchJobOrdersId = {
  variables: {
    urlParams: PatchJobOrdersIdUrlParams
    requestBody: PatchJobOrdersIdRequestBody
  }
}