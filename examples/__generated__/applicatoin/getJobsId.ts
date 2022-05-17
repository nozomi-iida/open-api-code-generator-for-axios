import type * as Types from './@types';
export type GetJobsIdUrlParams = {
  id: string
} | undefined
export type GetJobsIdResponse = Types.Job_v1
export type GetJobsId = {
  variables: {
    urlParams: GetJobsIdUrlParams
  }
}