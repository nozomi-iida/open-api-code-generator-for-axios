import type * as Types from './@types';
export type PatchAchievementsIdUrlParams = {
  id: string
} | undefined
export type PatchAchievementsIdResponse = Types.Achievement_v1
export type PatchAchievementsIdRequestBody = {
  achievement: {
    content: string
    createdDate: string
    description: string
  }
}
export type PatchAchievementsId = {
  variables: {
    urlParams: PatchAchievementsIdUrlParams
    requestBody: PatchAchievementsIdRequestBody
  }
}