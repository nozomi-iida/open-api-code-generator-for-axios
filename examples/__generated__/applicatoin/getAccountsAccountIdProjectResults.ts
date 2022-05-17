import type * as Types from './@types';
export type GetAccountsAccountIdProjectResultsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdProjectResultsResponse = {
  projectResult: {
    totalRate: number
    totalJobsNum: number
    skils: Types.Skill_v1[]
    jobs: Types.Job_v1[]
  }
}
export type GetAccountsAccountIdProjectResults = {
  variables: {
    urlParams: GetAccountsAccountIdProjectResultsUrlParams
  }
}