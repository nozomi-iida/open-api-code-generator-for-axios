import type * as Types from './@types';
export type PostAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdSupportResponse = Types.Support_v1
export type PostAccountsAccountIdSupportRequestBody = {
  support: {
    project: boolean
    career: boolean
  }
}
export type PostAccountsAccountIdSupport = {
  variables: {
    urlParams: PostAccountsAccountIdSupportUrlParams
    requestBody: PostAccountsAccountIdSupportRequestBody
  }
}