import type * as Types from './@types';
export type PatchProductsIdUrlParams = {
  id: string
} | undefined
export type PatchProductsIdResponse = Types.Product
export type PatchProductsIdRequestBody = {
  product: {
    name: string
    description: string
    active: boolean
  }
}
export type PatchProductsId = {
  variables: {
    urlParams: PatchProductsIdUrlParams
    requestBody: PatchProductsIdRequestBody
  }
}