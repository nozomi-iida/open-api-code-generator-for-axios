import type * as Types from './@types';
export type GetProductsIdPricesUrlParams = {
  id: string
} | undefined
export type GetProductsIdPricesResponse = {
  prices: Types.Price[]
}
export type GetProductsIdPrices = {
  variables: {
    urlParams: GetProductsIdPricesUrlParams
  }
}