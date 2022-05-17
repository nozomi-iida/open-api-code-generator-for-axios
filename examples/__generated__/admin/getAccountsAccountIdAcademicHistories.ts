import type * as Types from './@types';
export type GetAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdAcademicHistoriesResponse = {
  academicHistories: Types.AcademicHistory[]
}
export type GetAccountsAccountIdAcademicHistoriesQueryParams = {
} | undefined
export type GetAccountsAccountIdAcademicHistories = {
  variables: {
    urlParams: GetAccountsAccountIdAcademicHistoriesUrlParams
    queryParams: GetAccountsAccountIdAcademicHistoriesQueryParams
  }
}