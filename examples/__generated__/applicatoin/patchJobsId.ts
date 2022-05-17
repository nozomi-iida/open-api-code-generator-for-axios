import type * as Types from './@types';
export type PatchJobsIdUrlParams = {
  id: string
} | undefined
export type PatchJobsIdResponse = Types.Job_v1
export type PatchJobsIdRequestBody = {
  job: {
    isPublic: boolean
  }
}
export type PatchJobsId = {
  variables: {
    urlParams: PatchJobsIdUrlParams
    requestBody: PatchJobsIdRequestBody
  }
}