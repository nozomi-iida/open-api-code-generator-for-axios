import type * as Types from './@types';
export type GetInvoicesIdUrlParams = {
  id: string
} | undefined
export type GetInvoicesIdResponse = Types.Invoice_v1
export type GetInvoicesId = {
  variables: {
    urlParams: GetInvoicesIdUrlParams
  }
}