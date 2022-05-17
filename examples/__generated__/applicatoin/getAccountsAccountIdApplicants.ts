import type * as Types from './@types';
export type GetAccountsAccountIdApplicantsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdApplicantsResponse = {
  applicants: Types.Applicant_v1[]
}
export type GetAccountsAccountIdApplicants = {
  variables: {
    urlParams: GetAccountsAccountIdApplicantsUrlParams
  }
}