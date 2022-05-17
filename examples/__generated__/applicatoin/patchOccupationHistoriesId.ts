import type * as Types from './@types';
export type PatchOccupationHistoriesIdUrlParams = {
  id: string
} | undefined
export type PatchOccupationHistoriesIdResponse = Types.OccupationHistory_v1
export type PatchOccupationHistoriesIdRequestBody = {
  occupationHistory: {
    yearOfExperience: number
    occupationId: string
  }
}
export type PatchOccupationHistoriesId = {
  variables: {
    urlParams: PatchOccupationHistoriesIdUrlParams
    requestBody: PatchOccupationHistoriesIdRequestBody
  }
}