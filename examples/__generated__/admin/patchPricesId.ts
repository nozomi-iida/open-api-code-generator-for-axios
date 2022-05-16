import type * as Types from './@types';
export type PatchPricesIdUrlParams = {
  id: string
} | undefined
export type PatchPricesIdResponse = Types.Price
export type PatchPricesIdRequestBody = {
  price: {
    active: boolean
  }
}
export type PatchPricesId = {
  variables: {
    urlParams: PatchPricesIdUrlParams
requestBody: PatchPricesIdRequestBody
  }
}