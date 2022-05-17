import type * as Types from './@types';
export type GetJobOrdersIdUrlParams = {
  id: string
} | undefined
export type GetJobOrdersIdResponse = Types.JobOrder
export type GetJobOrdersId = {
  variables: {
    urlParams: GetJobOrdersIdUrlParams
  }
}