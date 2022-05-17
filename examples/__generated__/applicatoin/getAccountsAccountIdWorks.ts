import type * as Types from './@types';
export type GetAccountsAccountIdWorksUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdWorksResponse = {
  jobs: Types.Job_v1[]
}
export type GetAccountsAccountIdWorksQueryParams = {
  /** ステータス */
  status?: 'in_progress' | 'completed' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
} | undefined
export type GetAccountsAccountIdWorks = {
  variables: {
    urlParams: GetAccountsAccountIdWorksUrlParams
    queryParams: GetAccountsAccountIdWorksQueryParams
  }
}