import type * as Types from './@types';
export type PostEmploymentStatusesResponse = Types.EmploymentStatus
export type PostEmploymentStatusesRequestBody = {
  employmentStatus: {
    name: string
    type: 'CAREER' | 'PROJECT'
  }
}
export type PostEmploymentStatuses = {
  variables: {
    requestBody: PostEmploymentStatusesRequestBody
  }
}