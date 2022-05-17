import type * as Types from './@types';
export type PatchStatesIdUrlParams = {
  id: string
} | undefined
export type PatchStatesIdResponse = Types.State
export type PatchStatesIdRequestBody = {
  state: {
    name: string
    countryCode: string
  }
}
export type PatchStatesId = {
  variables: {
    urlParams: PatchStatesIdUrlParams
    requestBody: PatchStatesIdRequestBody
  }
}