import type * as Types from './@types';
export type GetAccountsAccountIdSearchConditionsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdSearchConditionsResponse = {
  searchConditions: Types.SearchCondition_v1[]
}
export type GetAccountsAccountIdSearchConditionsQueryParams = {
  /** その企業の検索条件一覧を返す */
  companyId?: string | undefined
  /** ターゲット */
  target?: string | undefined
} | undefined
export type GetAccountsAccountIdSearchConditions = {
  variables: {
    urlParams: GetAccountsAccountIdSearchConditionsUrlParams
    queryParams: GetAccountsAccountIdSearchConditionsQueryParams
  }
}