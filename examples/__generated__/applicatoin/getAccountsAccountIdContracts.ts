import type * as Types from './@types';
export type GetAccountsAccountIdContractsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdContractsResponse = {
  jobOrders: Types.JobOrder[]
}
export type GetAccountsAccountIdContractsQueryParams = {
  /** ステータス */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
} | undefined
export type GetAccountsAccountIdContracts = {
  variables: {
    urlParams: GetAccountsAccountIdContractsUrlParams
    queryParams: GetAccountsAccountIdContractsQueryParams
  }
}