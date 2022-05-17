import type * as Types from './@types';
export type GetAccountsAccountIdMessagesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdMessagesResponse = {
  messages: Types.Message_v1[]
  totalDataNums: number
}
export type GetAccountsAccountIdMessagesQueryParams = {
  companyId: string
} | undefined
export type GetAccountsAccountIdMessages = {
  variables: {
    urlParams: GetAccountsAccountIdMessagesUrlParams
    queryParams: GetAccountsAccountIdMessagesQueryParams
  }
}