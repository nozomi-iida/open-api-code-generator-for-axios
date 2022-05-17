import type * as Types from './@types';
export type GetAccountsResponse = {
  accounts: Types.Account[]
  totalDataNums: number
}
export type GetAccountsQueryParams = {
  /** 'applicant'を指定すると、応募者のアカウント一覧を取得する */
  type?: 'applicant' | undefined
  /** アカウントの名前検索 */
  keyword?: string | undefined
} | undefined
export type GetAccounts = {
  variables: {
    queryParams: GetAccountsQueryParams
  }
}