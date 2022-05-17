import type * as Types from './@types';
export type PostAccountsAccountIdAchievementsUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdAchievementsResponse = Types.Achievement_v1
export type PostAccountsAccountIdAchievementsRequestBody = {
  achievement: {
    content: string
    createdDate: string
    description?: string | undefined
  }
}
export type PostAccountsAccountIdAchievements = {
  variables: {
    urlParams: PostAccountsAccountIdAchievementsUrlParams
    requestBody: PostAccountsAccountIdAchievementsRequestBody
  }
}