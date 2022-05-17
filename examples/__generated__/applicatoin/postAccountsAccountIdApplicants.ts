import type * as Types from './@types';
export type PostAccountsAccountIdApplicantsUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdApplicantsResponse = Types.Applicant_v1
export type PostAccountsAccountIdApplicantsRequestBody = {
  applicant: {
    recruitmentId: string
  }
}
export type PostAccountsAccountIdApplicants = {
  variables: {
    urlParams: PostAccountsAccountIdApplicantsUrlParams
    requestBody: PostAccountsAccountIdApplicantsRequestBody
  }
}