import type * as Types from './@types';
export type GetAccountsAccountIdFollowingUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdFollowingResponse = {
  followings: Types.Company_v1[]
  totalDataNums: number
}
export type GetAccountsAccountIdFollowing = {
  variables: {
    urlParams: GetAccountsAccountIdFollowingUrlParams
  }
}