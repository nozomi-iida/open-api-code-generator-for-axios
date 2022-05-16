import type * as Types from './@types';
export type GetProductsIdUrlParams = {
  id: string
} | undefined
export type GetProductsIdResponse = Types.Product
export type GetProductsId = {
  variables: {
    urlParams: GetProductsIdUrlParams
  }
}