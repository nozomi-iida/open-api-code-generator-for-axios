import type * as Types from './@types';
export type GetTermHistoriesResponse = {
  term_histories: Types.TermHistory[]
}
export type GetTermHistoriesQueryParams = {
  type?: 'common' | 'plan' | undefined
} | undefined
export type GetTermHistories = {
  variables: {
    queryParams: GetTermHistoriesQueryParams
  }
}