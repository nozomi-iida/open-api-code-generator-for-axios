import type * as Types from './@types';
export type PatchIndustryHistoriesIdUrlParams = {
  id: string
} | undefined
export type PatchIndustryHistoriesIdResponse = Types.IndustryHistory_v1
export type PatchIndustryHistoriesIdRequestBody = {
  industryHistory: {
    yearOfExperience: number
    industryId: string
  }
}
export type PatchIndustryHistoriesId = {
  variables: {
    urlParams: PatchIndustryHistoriesIdUrlParams
    requestBody: PatchIndustryHistoriesIdRequestBody
  }
}