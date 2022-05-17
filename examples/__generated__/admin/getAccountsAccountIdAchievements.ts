import type * as Types from './@types';
export type GetAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdAchievementsResponse = {
  achievements: Types.Achievement[]
}
export type GetAccountsAccountIdAchievements = {
  variables: {
    urlParams: GetAccountsAccountIdAchievementsUrlParams
  }
}