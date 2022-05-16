import type * as Types from './@types';
export type PostOfficialInformationsResponse = Types.OfficialInformation
export type PostOfficialInformationsRequestBody = {
  official_information: {
    title?: string | undefined
    content?: string | undefined
    html_content?: string | undefined
    is_released: boolean
  }
}
export type PostOfficialInformations = {
  variables: {
    requestBody: PostOfficialInformationsRequestBody
  }
}