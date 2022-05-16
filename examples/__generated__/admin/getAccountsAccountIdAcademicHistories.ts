import type * as Types from './@types';
export type GetAccountsAccountIdAcademicHistoriesUrlParams = {
  account_id: string
} | undefined
export type GetAccountsAccountIdAcademicHistoriesResponse = {
  academic_histories: Types.AcademicHistory[]
}
export type GetAccountsAccountIdAcademicHistoriesQueryParams = {
} | undefined
export type GetAccountsAccountIdAcademicHistories = {
  variables: {
    urlParams: GetAccountsAccountIdAcademicHistoriesUrlParams
queryParams: GetAccountsAccountIdAcademicHistoriesQueryParams
  }
}