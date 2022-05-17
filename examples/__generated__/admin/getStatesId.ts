import type * as Types from './@types';
export type GetStatesIdUrlParams = {
  id: string
} | undefined
export type GetStatesIdResponse = Types.State
export type GetStatesId = {
  variables: {
    urlParams: GetStatesIdUrlParams
  }
}