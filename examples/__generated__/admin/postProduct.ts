import type * as Types from './@types';
export type PostProductResponse = Types.Product
export type PostProductRequestBody = {
  product: {
    name: string
    description?: string | undefined
    active?: boolean | undefined
    /** good=買い切り商品, service=サブスク */
    type: 'good' | 'service'
    planType?: 'client' | 'agent' | undefined
  }
}
export type PostProduct = {
  variables: {
    requestBody: PostProductRequestBody
  }
}