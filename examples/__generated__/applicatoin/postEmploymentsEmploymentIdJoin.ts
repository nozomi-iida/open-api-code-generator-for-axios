import type * as Types from './@types';
export type PostEmploymentsEmploymentIdJoinUrlParams = {
  employmentId: string
} | undefined
export type PostEmploymentsEmploymentIdJoinRequestBody = {
  inviteToken: string
}
export type PostEmploymentsEmploymentIdJoin = {
  variables: {
    urlParams: PostEmploymentsEmploymentIdJoinUrlParams
    requestBody: PostEmploymentsEmploymentIdJoinRequestBody
  }
}