import type * as Types from './@types';
export type PatchOfficialInformationsIdUrlParams = {
  id: string
} | undefined
export type PatchOfficialInformationsIdResponse = Types.OfficialInformation
export type PatchOfficialInformationsIdRequestBody = {
  officialInformation: {
    title: string
    content: string
    htmlContent: string
    isReleased: boolean
  }
}
export type PatchOfficialInformationsId = {
  variables: {
    urlParams: PatchOfficialInformationsIdUrlParams
    requestBody: PatchOfficialInformationsIdRequestBody
  }
}