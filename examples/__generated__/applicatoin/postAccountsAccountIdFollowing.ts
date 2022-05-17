import type * as Types from './@types';
export type PostAccountsAccountIdFollowingUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdFollowingResponse = Types.Company_v1
export type PostAccountsAccountIdFollowingRequestBody = {
  following: {
    companyId: string
  }
}
export type PostAccountsAccountIdFollowing = {
  variables: {
    urlParams: PostAccountsAccountIdFollowingUrlParams
    requestBody: PostAccountsAccountIdFollowingRequestBody
  }
}