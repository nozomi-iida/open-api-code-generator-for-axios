import type * as Types from './@types';
export type GetPricesIdUrlParams = {
  id: string
} | undefined
export type GetPricesIdResponse = Types.Price
export type GetPricesId = {
  variables: {
    urlParams: GetPricesIdUrlParams
  }
}