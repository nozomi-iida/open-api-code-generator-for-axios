import type * as Types from './@types';
export type GetAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdAcademicHistoriesResponse = {
  academicHistories: Types.AcademicHistory_v1[]
}
export type GetAccountsAccountIdAcademicHistories = {
  variables: {
    urlParams: GetAccountsAccountIdAcademicHistoriesUrlParams
  }
}