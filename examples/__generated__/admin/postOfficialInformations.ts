import type * as Types from './@types';
export type PostOfficialInformationsResponse = Types.OfficialInformation
export type PostOfficialInformationsRequestBody = {
  officialInformation: {
    title?: string | undefined
    content?: string | undefined
    htmlContent?: string | undefined
    isReleased: boolean
  }
}
export type PostOfficialInformations = {
  variables: {
    requestBody: PostOfficialInformationsRequestBody
  }
}