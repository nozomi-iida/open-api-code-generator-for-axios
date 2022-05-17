import type * as Types from './@types';
export type GetAccountsAccountIdJobChangeCompletionReportsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdJobChangeCompletionReportsResponse = {
  jobChangeCompletionReports: Types.JobChangeCompletionReport_v1[]
}
export type GetAccountsAccountIdJobChangeCompletionReports = {
  variables: {
    urlParams: GetAccountsAccountIdJobChangeCompletionReportsUrlParams
  }
}