import type * as Types from './@types';
export type PatchSpecialtyCompanyTypesIdUrlParams = {
  id: string
} | undefined
export type PatchSpecialtyCompanyTypesIdResponse = Types.SpecialtyCompanyType
export type PatchSpecialtyCompanyTypesIdRequestBody = {
  specialtyCompanyType: {
    content: string
  }
}
export type PatchSpecialtyCompanyTypesId = {
  variables: {
    urlParams: PatchSpecialtyCompanyTypesIdUrlParams
    requestBody: PatchSpecialtyCompanyTypesIdRequestBody
  }
}