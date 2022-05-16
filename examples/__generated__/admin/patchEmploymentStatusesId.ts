import type * as Types from './@types';
export type PatchEmploymentStatusesIdUrlParams = {
  id: string
} | undefined
export type PatchEmploymentStatusesIdResponse = Types.EmploymentStatus
export type PatchEmploymentStatusesIdRequestBody = {
  employment_status: {
    name: string
    type: 'CAREER' | 'PROJECT'
  }
}
export type PatchEmploymentStatusesId = {
  variables: {
    urlParams: PatchEmploymentStatusesIdUrlParams
requestBody: PatchEmploymentStatusesIdRequestBody
  }
}