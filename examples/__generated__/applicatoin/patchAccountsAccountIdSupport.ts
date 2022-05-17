import type * as Types from './@types';
export type PatchAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined
export type PatchAccountsAccountIdSupportResponse = Types.Support_v1
export type PatchAccountsAccountIdSupportRequestBody = {
  support: {
    project: boolean
    career: boolean
  }
}
export type PatchAccountsAccountIdSupport = {
  variables: {
    urlParams: PatchAccountsAccountIdSupportUrlParams
    requestBody: PatchAccountsAccountIdSupportRequestBody
  }
}