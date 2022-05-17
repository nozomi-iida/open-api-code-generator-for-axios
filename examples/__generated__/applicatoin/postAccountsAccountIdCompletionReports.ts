import type * as Types from './@types';
export type PostAccountsAccountIdCompletionReportsUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdCompletionReportsResponse = Types.JobChangeCompletionReport_v1
export type PostAccountsAccountIdCompletionReportsRequestBody = {
  jobChangeCompletionReport: {
    amount: number
    companyId: string
  }
}
export type PostAccountsAccountIdCompletionReports = {
  variables: {
    urlParams: PostAccountsAccountIdCompletionReportsUrlParams
    requestBody: PostAccountsAccountIdCompletionReportsRequestBody
  }
}