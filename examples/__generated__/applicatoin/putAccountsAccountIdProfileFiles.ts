import type * as Types from './@types';
export type PutAccountsAccountIdProfileFilesUrlParams = {
  accountId: string
} | undefined
export type PutAccountsAccountIdProfileFilesResponse = Types.Profile_v1
export type PutAccountsAccountIdProfileFilesRequestBody = {
  files: string[]
}
export type PutAccountsAccountIdProfileFiles = {
  variables: {
    urlParams: PutAccountsAccountIdProfileFilesUrlParams
    requestBody: PutAccountsAccountIdProfileFilesRequestBody
  }
}