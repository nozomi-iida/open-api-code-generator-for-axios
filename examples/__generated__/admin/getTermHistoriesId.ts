import type * as Types from './@types';
export type GetTermHistoriesIdUrlParams = {
  id: string
} | undefined
export type GetTermHistoriesIdResponse = Types.TermHistory
export type GetTermHistoriesId = {
  variables: {
    urlParams: GetTermHistoriesIdUrlParams
  }
}