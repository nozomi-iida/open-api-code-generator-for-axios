import type * as Types from './@types';
export type GetAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdAchievementsResponse = {
  achievements: Types.Achievement_v1[]
}
export type GetAccountsAccountIdAchievements = {
  variables: {
    urlParams: GetAccountsAccountIdAchievementsUrlParams
  }
}