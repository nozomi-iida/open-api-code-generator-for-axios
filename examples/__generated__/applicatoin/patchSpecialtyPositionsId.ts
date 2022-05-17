import type * as Types from './@types';
export type PatchSpecialtyPositionsIdUrlParams = {
  id: string
} | undefined
export type PatchSpecialtyPositionsIdResponse = Types.SpecialtyPosition
export type PatchSpecialtyPositionsIdRequestBody = {
  specialtyPosition: {
    content: string
  }
}
export type PatchSpecialtyPositionsId = {
  variables: {
    urlParams: PatchSpecialtyPositionsIdUrlParams
    requestBody: PatchSpecialtyPositionsIdRequestBody
  }
}